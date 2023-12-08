import ResetPasswordService from '@/app/services/resetPasswordService';
import { NextApiRequest, NextApiResponse } from 'next';
import UserRepository from '@/app/repositories/UserRepository';

const resetPasswordService = new ResetPasswordService(UserRepository.getInstance());

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { token, password } = req.body;

      if (!token || !password) {
        return res.status(400).json({ error: 'Token and password are required' });
      }

      const user = await resetPasswordService.verifyResetToken(token, req, res);

      if (!user) {
        return res.status(400).json({ error: 'Invalid token' });
      }

      // Reset the user's password
      await resetPasswordService.resetPassword(user.userId, password);
      
      res.status(200).json({ message: 'Password reset successfully' });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.error('Error during password reset:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}