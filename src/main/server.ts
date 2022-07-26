/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import moduleAlias from 'module-alias'
import 'module-alias/register'
import { resolve } from 'path'

// SETUP ALIASES FOR DEV AND PROD ENVIRONMENTS
const absolutePath = resolve('.')
const alias = process.env.NODE_ENV === 'production' ? { '@': `${absolutePath}/dist` } : { '@': '/' }
moduleAlias.addAliases(alias)

import { setupApp } from './config';
import mongoose from 'mongoose'

const app = setupApp();


mongoose.connect(process.env.DB_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`[SERVER] Running at http://localhost:${process.env.PORT}`);
  });
}).catch((err) => {
  console.error(err);
});
