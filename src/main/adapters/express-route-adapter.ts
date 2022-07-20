import { Request, Response } from 'express';
import { Controller, HttpRequest } from '@/presentation/protocols';

// eslint-disable-next-line max-len
const adaptRoute = (controller: Controller) => async (req: Request, res: Response) => {
  const httpRequest: HttpRequest = {
    ...(req.body || {}),
    ...(req.params || {}),
    accountId: req.body?.accountID,
  };
  const httpResponse = await controller.handle(httpRequest);

  if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } else {
    res.status(httpResponse.statusCode).json({
      error: httpResponse.body.message,
    });
  }
};

export default adaptRoute;
