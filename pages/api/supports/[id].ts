import { NextApiRequest, NextApiResponse } from 'next';
import { SupportController } from '@/app/controllers/SupportController';

const supportController = new SupportController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);
  try{
    if (req.method === 'GET') {
      await supportController.getSupportById(req, res);
    } else if (req.method === 'PUT') {
      await supportController.updateSupport(id, req.body, res);
    } else if (req.method === 'DELETE') {
      await supportController.deleteSupport(id, res);
    } else {
      res.status(405).end();
    }
  }
  catch(error){
    supportController.handleError(error, res);
  }

}