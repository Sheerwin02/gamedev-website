
import { NextApiRequest, NextApiResponse } from 'next';
import { UserController } from '@/app/controllers/UserController';

const userController = new UserController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      await userController.forgotPassword(req, res);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    userController.handleError(error, res);
  }
}
