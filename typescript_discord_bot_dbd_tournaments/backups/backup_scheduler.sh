#!/bin/bash
while true; do
	backup_directory="./backups"
	
    ls -1 ${backup_directory}/*.sql.gz | tail -n +8 | xargs -r rm --

	timestamp=$(date +%Y_%m_%d)
	
	PGPASSWORD="$POSTGRES_PASSWORD" \
	pg_dump -h postgres \
		-U "$POSTGRES_USER" \
		-d "$POSTGRES_DB" \
		| gzip > "${backup_directory}/${timestamp}.sql.gz.tmp"
	mv "${backup_directory}/${timestamp}.sql.gz.tmp" "${backup_directory}/${timestamp}.sql.gz"

	sleep 86400
done