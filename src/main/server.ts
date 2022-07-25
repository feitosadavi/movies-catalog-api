import { setupApp } from './config';
import 'reflect-metadata';
import mongoose from 'mongoose'

const app = setupApp();


mongoose.connect(process.env.DB_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`[SERVER] Running at http://localhost:${process.env.PORT}`);
  });
}).catch((err) => {
  console.error(err);
});
