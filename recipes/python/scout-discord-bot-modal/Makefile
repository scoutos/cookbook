# Arguments that can be overridden
DEPLOYMENT_TARGET ?= development
ENV ?= preview
LABEL ?= discord_bot

.PHONY: dev
dev: ## Run the application in development mode
	@echo "Serving the application in dev mode..."
	@DEPLOYMENT_TARGET=${DEPLOYMENT_TARGET} LABEL=${USER} poetry run modal serve --env=${ENV} scout_discord_bot_modal.main


.PHONY: deploy
deploy: ## Deploy the application to dev environment
	@echo "Deploying the application to dev environment..."
	@DEPLOYMENT_TARGET=${DEPLOYMENT_TARGET} LABEL=${LABEL} poetry run modal deploy --env=${ENV} --name=${LABEL} scout_discord_bot_modal.main