import { NextApiRequest, NextApiResponse } from 'next';
import { SupportController } from '@/app/controllers/SupportController';

const supportController = new SupportController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      await supportController.getAllSupports(req, res);
    } else if (req.method === 'POST') {
      await supportController.createSupport(req, res);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    supportController.handleError(error, res);
  }
}