import { NextApiRequest, NextApiResponse } from 'next';
import { SupportController } from '@/app/controllers/SupportController';

const supportController = new SupportController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    if (req.method === 'PATCH') {
      await supportController.markResolved(req, res);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    supportController.handleError(error, res);
  }
}
