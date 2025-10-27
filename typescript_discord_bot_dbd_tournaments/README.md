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

## Task (CLI)

- Described how to backup PostgreSQL data and check it using Adminer.

### Restore backup DB

- task docker:postgres:restore_backup TIMESTAMP={timestamp}

### Check data

- task docker:postgres_and_adminer:run
- task docker:stop