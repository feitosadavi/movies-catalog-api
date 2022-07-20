import { Express } from 'express';
import {
  cors,
  bodyParser,
  contentType,
  handleAppError,
} from '@/main/middlewares';

export const setupMiddlewares = (app: Express): void => {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
  // app.use(handleAppError);
};
