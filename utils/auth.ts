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
  req: AuthenticatedNextApiRequest,
  res: NextApiResponse
): Promise<UserPayload> => {
  // Check if the request contains a valid JWT token
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    return Promise.reject(res.status(401).json({ error: 'Unauthorized' }));
  }

  try {
    // Verify the token with your secret key
    const decodedToken = jwt.verify(token, jwtSecret) as UserPayload;
    if (!decodedToken) {
      return Promise.reject(res.status(401).json({ error: 'Invalid token' }));
    }

    // Attach the decoded token to the request for further use
    req.user = decodedToken;

    // Continue with the actual API logic
    return Promise.resolve(decodedToken);
  } catch (error) {
    return Promise.reject(res.status(401).json({ error: 'Invalid token' }));
  }
};
