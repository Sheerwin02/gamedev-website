import { NextApiRequest, NextApiResponse } from 'next';
import { UserController } from '@/app/controllers/UserController';

// Initialize the user controller
const userController = new UserController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { action } = req.body;

      // Check the action type
      if (action === 'sendOtp') {
        await userController.sendOtp(req, res);
      } else {
        res.status(400).json({ error: 'Invalid action type' });
      }
    } else {
      res.status(405).end();
    }
  } catch (error) {
    userController.handleError(error, res);
  }
}
