## Project Structure

- {Link: Path to a directory or file} - {Status: Refactoring/Inheritance}
- [./app/src/interactions/](./app/src/interactions/) - Refactoring
- [./app/src/messages/](./app/src/messages/) - Refactoring
- [./app/src/models/](./app/src/models/) - Inheritance
- [./app/src/services/](./app/src/services/) - Inheritance
- [./app/src/utilities/algorithms.ts](./app/src/utilities/algorithms.ts) - Refactoring
- [./app/src/utilities/app_methods.ts](./app/src/utilities/app_methods.ts) - Refactoring
- [./app/src/app.ts](./app/src/app.ts) - Refactoring
- [./app/src/deploy_commands.ts](./app/src/deploy_commands.ts) - Refactoring

## Restore backup DB (CLI)

- docker compose -f docker-compose.{dev|prod}.yml exec -T postgres sh -c 'zcat ./backups_{dev|prod}/{timestamp}.sql.gz | psql -U "$POSTGRES_USER" -d "$POSTGRES_DB"'