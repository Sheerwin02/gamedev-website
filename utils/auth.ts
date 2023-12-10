import { NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { AuthenticatedNextApiRequest } from '../types/custom';

// Access the JWT_SECRET from the environment variables
const jwtSecret = process.env.JWT_SECRET || 'default-secret-key';

export interface UserPayload {
  userId: number;
  email: string;
  // Add any other user-related information you want to include in the token
}

export const generateToken = (userPayload: UserPayload): string => {
  // Create a token with the user payload and your secret key
  const token = jwt.sign(userPayload, jwtSecret, { expiresIn: '1h' });

  return token;
};

export const verifyToken = async (
  reqOrToken: AuthenticatedNextApiRequest | string,
  res?: NextApiResponse
): Promise<UserPayload> => {
  let token: string;

  // Check if the first parameter is a request object or a token string
  if (typeof reqOrToken === 'string') {
    token = reqOrToken;
  } else {
    // If it's a request object, extract the token from the headers
    token = reqOrToken.headers.authorization?.replace('Bearer ', '') || '';
    // If no token is found in the request, reject with 401 Unauthorized
    if (!token) {
      if (res) {
        return Promise.reject(res.status(401).json({ error: 'Unauthorized' }));
      } else {
        throw new Error('Unauthorized');
      }
    }
  }

  try {
    // Verify the token with your secret key
    const decodedToken = jwt.verify(token, jwtSecret) as UserPayload;

    if (!decodedToken) {
      if (res) {
        return Promise.reject(res.status(401).json({ error: 'Invalid token' }));
      } else {
        throw new Error('Invalid token');
      }
    }

    // If it's a request object, attach the decoded token to the request for further use
    if (res && typeof reqOrToken !== 'string') {
      reqOrToken.user = decodedToken;
    }

    // Continue with the actual API logic
    return Promise.resolve(decodedToken);
  } catch (error) {
    if (res) {
      return Promise.reject(res.status(401).json({ error: 'Invalid token' }));
    } else {
      throw new Error('Invalid token');
    }
  }
};

