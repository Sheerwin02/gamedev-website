import { NextApiRequest, NextApiResponse } from 'next';
import { CustomError, ErrorType } from '../db/errorHelper';

export abstract class ControllerBase {
  public handleError(error: unknown, res: NextApiResponse) {
    if (error instanceof Error) {
      let statusCode = 500;

      if (error instanceof CustomError) {
        if (error.type === ErrorType.NotFound) {
          statusCode = 404;
        } else if (error.type === ErrorType.ValidationError) {
          statusCode = 400;
        }
      }

      res.status(statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
