import { setupApp } from './config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';


const app = setupApp();

const PORT = process.env.PORT || 3000;
const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  DB_PORT,
} = process.env

const AppDataSource = new DataSource({
  type: 'postgres', // bolar uma estrategia para rodar as migrations sem precisar modificar isto!!!
  host: DB_HOST, // if using docker, needs to be the container name
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: ['./src/infra/repos/postgres/entities/*.entity.ts'],
  subscribers: [],
  migrations: [
    './src/infra/repos/postgres/migrations/*.ts',
  ],
});

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`[SERVER] Running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error(err);
});
