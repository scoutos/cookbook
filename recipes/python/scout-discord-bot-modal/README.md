## ScoutOS and Modal AskAI Discord Bot

This example shows how to create an AskAI Discord bot that uses Scout and Modal.

### Requirements

- Python 3.12
- Make
- Poetry
- Modal Account
- ScoutOS Account

### Installation Instructions

#### Python 3.12

1. **MacOS**:

   ```sh
   brew install python@3.12
   ```

2. **Ubuntu**:

   ```sh
   sudo add-apt-repository ppa:deadsnakes/ppa
   sudo apt update
   sudo apt install python3.12
   ```

3. **Windows**:
   - Download the installer from the [official Python website](https://www.python.org/downloads/release/python-3120/).
   - Run the installer and follow the instructions.

#### Make

1. **MacOS**:

   ```sh
   xcode-select --install
   ```

2. **Ubuntu**:

   ```sh
   sudo apt update
   sudo apt install build-essential
   ```

3. **Windows**:
   - Install [Chocolatey](https://chocolatey.org/install).
   - Run the following command in an elevated (administrator) command prompt:
     ```sh
     choco install make
     ```

#### Poetry

1. **All Platforms**:

   ```sh
   curl -sSL https://install.python-poetry.org | python3 -
   ```

   - Add Poetry to your PATH by following the instructions provided at the end of the installation script.

### Creating Accounts

1. **Modal Account**:

   - Visit [Modal](https://modal.com/) and sign up for an account.
   - Install the Modal CLI from [PyPI](https://pypi.org/project/modal/):
     ```sh
     pip install modal
     ```

2. **ScoutOS Account**:
   - Visit [ScoutOS](https://scoutos.com/) and sign up for an account.
   - Create a workflow on ScoutOS.

### Setting Up the Project

From this root directory:

1. Install dependencies using Poetry:
   ```sh
   poetry install
   ```

### Setting Up Environment Variables

You need to set up three environment variables for the bot:

1. **SCOUT_API_KEY**: Your Scout API key.
2. **SCOUT_WORKFLOW_ID**: Your Scout workflow ID.
3. **DISCORD_BOT_TOKEN**: Your Discord bot token.

Follow the instructions [here](https://discordpy.readthedocs.io/en/stable/discord.html) to create a Discord bot and get your bot token.

#### Adding Environment Variables in Modal

1. Go to the Modal dashboard.
2. Navigate to the "Secrets" section.
3. Create a new secret with the name `discord-bot`.
4. Add the following environment variables to the secret:

- SCOUT_API_KEY
- SCOUT_WORKFLOW_ID
- DISCORD_BOT_TOKEN

### Running the Project

Run the bot locally using Make:

```sh
make run dev
```

### Deploying the Project

You can deploy the bot using Make:

```sh
make deploy
```
