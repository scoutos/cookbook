## ScoutOS and Modal AskAI Discord Bot

This project demonstrates how to create an AskAI Discord bot using Scout and Modal.

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

From the root directory:

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
3. Create a new secret with the name [`discord-bot`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fworkspaces%2Fcookbook%2Frecipes%2Fpython%2Fscout-discord-bot-modal%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A103%2C%22character%22%3A38%7D%7D%5D%2C%22f2188166-796d-4b66-897a-ca0f0d022283%22%5D "Go to definition").
4. Add the following environment variables to the secret:
   - SCOUT_API_KEY
   - SCOUT_WORKFLOW_ID
   - DISCORD_BOT_TOKEN

### Running the Project

Run the bot locally using Make:

```sh
make dev
```

### Deploying the Project

You can deploy the bot using Make:

```sh
make deploy
```

### Project Structure

```
.gitignore
README.md
recipes/
	python/
		scout-discord-bot-modal/
			Makefile
			poetry.lock
			pyproject.toml
			README.md
			scout_discord_bot_modal/
				__init__.py
				main.py
				utils.py
			tests/
				__init__.py
```

### Main Components

- **Main Bot Function**: Defined in [`main.py`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fworkspaces%2Fcookbook%2Frecipes%2Fpython%2Fscout-discord-bot-modal%2Fscout_discord_bot_modal%2Fmain.py%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22main.py%22%2C%22f2188166-796d-4b66-897a-ca0f0d022283%22%5D "/workspaces/cookbook/recipes/python/scout-discord-bot-modal/scout_discord_bot_modal/main.py").
- **Utilities**: Helper functions in [`utils.py`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fworkspaces%2Fcookbook%2Frecipes%2Fpython%2Fscout-discord-bot-modal%2Fscout_discord_bot_modal%2Futils.py%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22utils.py%22%2C%22f2188166-796d-4b66-897a-ca0f0d022283%22%5D "/workspaces/cookbook/recipes/python/scout-discord-bot-modal/scout_discord_bot_modal/utils.py").
- **Makefile**: Commands for development and deployment in `Makefile`.
- **Project Configuration**: Defined in [`pyproject.toml`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fworkspaces%2Fcookbook%2Frecipes%2Fpython%2Fscout-discord-bot-modal%2Fpyproject.toml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pyproject.toml%22%2C%22f2188166-796d-4b66-897a-ca0f0d022283%22%5D "/workspaces/cookbook/recipes/python/scout-discord-bot-modal/pyproject.toml").