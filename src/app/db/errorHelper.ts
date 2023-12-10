import { NextApiResponse } from 'next';

export enum ErrorType {
  NotFound = 'NotFound',
  ValidationError = 'ValidationError',
  InternalServerError = 'InternalServerError',
  AuthenticationError = 'AuthenticationError',
  Unauthorized = 'Unauthorized',
  BadRequest = 'BadRequest',
}

export class CustomError extends Error {
  constructor(public type: ErrorType, public message: string, public details?: any) {
    super(message);
    this.name = 'CustomError';
  }
}

export const HttpStatus = {
  NotFound: 404,
  ValidationError: 400,
  InternalServerError: 500,
  AuthenticationError: 401,
  Unauthorized: 401,
  BadRequest: 400,
};

export const handleErrorResponse = (res: NextApiResponse, error: CustomError) => {
  const status = HttpStatus[error.type] || HttpStatus.InternalServerError;

  const jsonResponse = {
    error: {
      type: error.type,
      message: getErrorMessage(error),
      details: getErrorDetails(error),
    },
  };

  res.status(status).json(jsonResponse);
};
// Helper function to get a more detailed error message
const getErrorMessage = (error: CustomError): string => {
  switch (error.type) {
    case ErrorType.NotFound:
      return `The requested ${error.name || 'resource'} was not found.`;
    case ErrorType.ValidationError:
      return `Validation error: ${error.message}`;
    case ErrorType.InternalServerError:
      return `An internal server error occurred: ${error.message || 'Unknown error'}`;
    case ErrorType.AuthenticationError:
      return `Authentication error: ${error.message || 'Invalid credentials'}`;
    case ErrorType.Unauthorized:
      return `Unauthorized: ${error.message || 'Access denied'}`;
    case ErrorType.BadRequest:
      return `Bad request: ${error.message || 'Invalid request'}`;
    default:
      return `Unknown error: ${error.message || 'An unexpected error occurred'}`;
  }
};


// Helper function to include specific details based on error type
const getErrorDetails = (error: CustomError): any => {
  switch (error.type) {
    case ErrorType.ValidationError:
      return error.details || { message: 'Validation failed' };
    case ErrorType.AuthenticationError:
      return error.details || { message: 'Authentication failed' };
    case ErrorType.Unauthorized:
      return error.details || { message: 'Unauthorized' };
    case ErrorType.BadRequest:
      return error.details || { message: 'Bad request' };
    default:
      return null;
  }
};
