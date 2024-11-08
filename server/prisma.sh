
#!/bin/bash

# Wait until MySQL is ready
./wait-for-it.sh db_mysql:3306 --timeout=60 --strict -- echo "MySQL is up"

# Run Prisma commands
yarn prisma migrate dev --name init
yarn prisma generate
yarn prisma migrate deploy

# Execute the main application
exec "$@"
