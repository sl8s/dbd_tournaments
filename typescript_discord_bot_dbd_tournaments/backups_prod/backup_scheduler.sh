#!/bin/bash
while true; do
    ls -1 ./backups_prod/*.sql.gz | tail -n +8 | xargs -r rm --

	timestamp=$(date +%Y_%m_%d)
	
	PGPASSWORD="$POSTGRES_PASSWORD" \
	pg_dump -h postgres \
		-U "$POSTGRES_USER" \
		-d "$POSTGRES_DB" \
		| gzip > "./backups_prod/${timestamp}.sql.gz.tmp"
	mv "./backups_prod/${timestamp}.sql.gz.tmp" "./backups_prod/${timestamp}.sql.gz"

	sleep 86400
done