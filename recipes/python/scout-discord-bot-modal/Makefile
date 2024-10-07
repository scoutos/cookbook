# Arguments that can be overridden
DEPLOYMENT_TARGET ?= development
ENV ?= preview
LABEL ?= api

.PHONY: dev
dev: ## Run the application in development mode
	@echo "Serving the application in dev mode..."
	@DEPLOYMENT_TARGET=${DEPLOYMENT_TARGET} LABEL=${USER} poetry run modal serve --env=${ENV} scout_discord_bot_modal.main