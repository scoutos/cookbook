import modal
from modal import Dict, Secret
import os
from .utils import get_thread, bot_is_mentioned, split_message

# Initialize the Modal app and image
app = modal.App()
image = modal.Image.debian_slim().pip_install("scoutos", "discord-py")

# Dictionary to store session history
sessions = Dict.from_name("session_history", create_if_missing=True)


# Define the main function for the Discord bot
@app.function(
    image=image,
    keep_warm=1,
    concurrency_limit=1,
    secrets=[modal.Secret.from_name("discord-bot")],
)
@modal.asgi_app()
def discord_bot():
    import discord
    from scoutos import AsyncScout

    # Set up Discord client with necessary intents
    intents = discord.Intents.default()
    intents.message_content = True

    client = discord.Client(intents=intents)

    # Initialize the Scout client
    scout_client = AsyncScout(
        api_key=os.environ["SCOUT_API_KEY"],
    )

    # Event handler for when the bot is ready
    @client.event
    async def on_ready():
        print(f"Logged in as {client.user}")

    # Event handler for when a message is received
    @client.event
    async def on_message(message):

        # Ignore messages sent by the bot itself
        if message.author == client.user:
            return

        # Get the thread if it exists
        thread = get_thread(message)
        session_id = thread.id if thread else None
        chat_history = (
            sessions.get(session_id, {"activity": []}).get("activity", [])
            if session_id
            else []
        )

        # If the thread exists and the bot is not mentioned, do nothing
        if thread and not bot_is_mentioned(message, client):
            return

        # Add the user's message to the activity log
        activity = [
            {"content": message.content, "role": "user", "type": "chat_message"}
        ]

        # Run the workflow and get the response stream
        response = scout_client.workflows.run_stream(
            workflow_id=os.environ["SCOUT_WORKFLOW_ID"],
            inputs={
                "user_message": message.content,
                "user_name": str(message.author),
                "chat_history": chat_history,
            },
        )

        # Process each event in the response stream
        async for event in response:
            if (
                event.name == "block_run_completed"
                and event.data.config.get("block_archetype_id")
                == "com.scoutos.discord.message"
            ):
                try:
                    # Create a new thread if it doesn't exist
                    if not thread:
                        thread = await message.create_thread(
                            name=f"Thread for {message.author}",
                            auto_archive_duration=60,
                        )
                        session_id = thread.id

                    message_content = event.data.state["output"]
                    if not message_content.strip():
                        continue

                    # Split the message into chunks and send each chunk
                    for msg in split_message(message_content):
                        await thread.send(msg)

                    # Add the assistant's message to the activity log
                    activity.append(
                        {
                            "content": message_content,
                            "role": "assistant",
                            "type": "chat_message",
                        }
                    )

                except Exception as e:
                    # Handle any errors that occur while sending the message
                    (
                        await thread.send(
                            "Oops! Something went wrong. Try again later."
                        )
                        if thread
                        else None
                    )
                    print("Error sending message:", e)

        # Update the session history with the new activity
        if session_id:
            session = sessions.get(session_id, {"activity": []})
            session["activity"].extend(activity)
            sessions[session_id] = session

    # Run the Discord client with the bot token
    client.run(os.environ["DISCORD_BOT_TOKEN"])
