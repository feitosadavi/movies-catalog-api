// SETUP ALIASES FOR DEV AND PROD ENVIRONMENTS
import moduleAlias from 'module-alias';
import 'module-alias/register';
import { resolve } from 'path';

import AppDataSource from '@/infra/repos/postgres/data-source';
import { setupApp } from './config';
import 'reflect-metadata';

const absolutePath = resolve('.');
const alias = process.env.NODE_ENV === 'production' ? { '@': `${absolutePath}/dist` } : { '@': '/' };
console.log({alias})
moduleAlias.addAliases(alias);

const app = setupApp();

const PORT = process.env.PORT || 3000;
AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`[SERVER] Running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error(err);
});
