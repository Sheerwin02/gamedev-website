import { NextApiRequest, NextApiResponse } from 'next';
import { UserController } from '@/app/controllers/UserController'; // Import your user controller

const userController = new UserController(); // Initialize the user controller

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);
  try {
    if (req.method === 'GET') {
      await userController.getUserById(req, res);
    } else if (req.method === 'PUT') {
      await userController.updateUser(id, req.body, res);
    } else if (req.method === 'DELETE') {
      await userController.deleteUser(id, res);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    userController.handleError(error, res);
  }
}
