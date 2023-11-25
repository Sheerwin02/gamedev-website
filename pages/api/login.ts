import { UserController } from '@/app/controllers/UserController';
import { NextApiRequest, NextApiResponse } from 'next';

const userController = new UserController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      await userController.loginUser(req, res);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    userController.handleError(error, res);
  }
}
