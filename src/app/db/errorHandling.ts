import { NextApiResponse } from 'next';
import { CustomError, ErrorType, handleErrorResponse } from './errorHelper';

export const handleErrors = (error: Error | undefined, res: NextApiResponse) => {
  if (error instanceof CustomError) {
    handleErrorResponse(res, error); 
  } else {
    handleErrorResponse(res, new CustomError(ErrorType.InternalServerError, 'Internal server error'));
  }
};
