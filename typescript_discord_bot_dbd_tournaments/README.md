## Project Structure

- {Link: Path to a directory or file} - {Status: Refactoring/Inheritance}
- [/app/src/interactions/](typescript_discord_bot_dbd_tournaments/app/src/interactions/) - Refactoring
- [/app/src/middlewares/](typescript_discord_bot_dbd_tournaments/app/src/middlewares/) - Refactoring
- [/app/src/models/](typescript_discord_bot_dbd_tournaments/app/src/models/) - Inheritance
- [/app/src/services/](typescript_discord_bot_dbd_tournaments/app/src/services/) - Inheritance
- [/app/src/utilities/similar_to_chain_of_responsibility_pattern/](typescript_discord_bot_dbd_tournaments/app/src/utilities/similar_to_chain_of_responsibility_pattern/) - Refactoring
- [/app/src/utilities/algorithms.ts](typescript_discord_bot_dbd_tournaments/app/src/utilities/algorithms.ts) - Refactoring
- [/app/src/utilities/app_methods.ts](typescript_discord_bot_dbd_tournaments/app/src/utilities/app_methods.ts) - Refactoring
- [/app/src/utilities/base_data_type.ts](typescript_discord_bot_dbd_tournaments/app/src/utilities/base_data_type.ts) - Refactoring
- [/app/src/app.ts](typescript_discord_bot_dbd_tournaments/app/src/app.ts) - Refactoring

## Docker

- Here are the docker commands for .dev and .prod

### Dev

- docker-compose -f docker-compose.dev.yml up --build
- docker-compose -f docker-compose.dev.yml down

### Prod

- docker-compose -f docker-compose.prod.yml up --build
- docker-compose -f docker-compose.prod.yml down