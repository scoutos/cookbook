# Function to split message into chunks of 2000 characters without breaking Markdown code snippets
def split_message(content, max_length=2000):
    chunks = []
    current_chunk = ""
    for line in content.split("\n"):
        if len(current_chunk) + len(line) + 1 > max_length:
            chunks.append(current_chunk)
            current_chunk = line + "\n"
        else:
            current_chunk += line + "\n"
    if current_chunk:
        chunks.append(current_chunk)
    return chunks


# Function to check if the bot is mentioned in the message
def bot_is_mentioned(message, client):
    return client.user in message.mentions


# Function to get the thread if the message is in a thread and mentions the bot
def get_thread(message, client):
    channel_type = str(message.channel.type)
    if channel_type in ["public_thread", "private_thread"]:
        return client.get_channel(message.channel.id)
    return None
