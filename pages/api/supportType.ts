import { SupportTypeController } from '@/app/controllers/SupportTypeController';
import { NextApiRequest, NextApiResponse } from 'next';


const supportTypeController = new SupportTypeController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      await supportTypeController.getAllSupportsTypes(req, res);
    } else if (req.method === 'POST') {
      await supportTypeController.createSupportType(req, res);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    supportTypeController.handleError(error, res);
  }
}
