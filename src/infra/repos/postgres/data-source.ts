import { DataSource } from 'typeorm';

const {
  TYPEORM_CONNECTION,
  TYPEORM_HOST,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_PORT,
  TYPEORM_SYNCHRONIZE,
  TYPEORM_LOGGING,
} = process.env

const AppDataSource = new DataSource({
  type: TYPEORM_CONNECTION as 'postgres', // bolar uma estrategia para rodar as migrations sem precisar modificar isto!!!
  host: TYPEORM_HOST, // if using docker, needs to be the container name
  port: Number(TYPEORM_PORT),
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  synchronize: Boolean(TYPEORM_SYNCHRONIZE),
  logging: Boolean(TYPEORM_LOGGING),
  entities: ['./src/infra/repos/postgres/entities/*.entity.ts'],
  subscribers: [],
  migrations: [
    './src/infra/repos/postgres/migrations/*.ts',
  ],
});

export default AppDataSource;
