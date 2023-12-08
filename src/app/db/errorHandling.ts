import { NextApiResponse, NextApiRequest } from 'next';
import { CustomError, ErrorType, handleErrorResponse } from './errorHelper';

export const handleErrors = (error: Error | undefined, res: NextApiResponse, req: NextApiRequest) => {
  try {
    if (error instanceof CustomError) {
      console.error(`Custom Error: Type - ${error.type}, Message - ${error.message}`);
      // Log request information if available
      console.error('Request Information:', {
        method: req.method,
        url: req.url,
        query: req.query,
        body: req.body,
      });
      handleErrorResponse(res, error);
    } else {
      console.error('Unexpected Error:', error);
      // Log request information if available
      console.error('Request Information:', {
        method: req.method,
        url: req.url,
        query: req.query,
        body: req.body,
      });
      const defaultErrorMessage = 'An unexpected error occurred. Please try again later.';
      const errorMessage = error?.message || defaultErrorMessage;
      handleErrorResponse(res, new CustomError(ErrorType.InternalServerError, errorMessage));
    }
  } catch (handlingError) {
    console.error('Error handling error:', handlingError);
    res.status(500).json({ error: 'Internal server error' });
  }
};
