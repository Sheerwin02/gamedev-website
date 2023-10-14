import { NextApiResponse } from 'next';

export enum ErrorType {
  NotFound = 'NotFound',
  ValidationError = 'ValidationError',
  InternalServerError = 'InternalServerError',
}

export class CustomError extends Error {
  constructor(public type: ErrorType, message: string) {
    super(message);
    this.name = 'CustomError';
  }
}

export const handleErrorResponse = (res: NextApiResponse, error: CustomError) => {
  const statusMap: Record<ErrorType, number> = {
    [ErrorType.NotFound]: 404,
    [ErrorType.ValidationError]: 400,
    [ErrorType.InternalServerError]: 500,
  };

  res.status(statusMap[error.type]).json({ error: error.message });
};
