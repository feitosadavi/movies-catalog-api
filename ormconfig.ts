require('dotenv').config();


const DatabaseConnectionTestConfiguration = {
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "movies",
  "database": "movies-catalog_db",
  "synchronize": true,
  "logging": true,
  "entities": [
    "./src/infra/repos/postgres/entities/*.entity.ts"
  ],
  "subscribers": [],
  "migrations": [
    "./src/infra/repos/postgres/migrations/*.ts"
  ]
};

export = DatabaseConnectionTestConfiguration;