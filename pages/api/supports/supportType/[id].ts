import { SupportTypeController } from '@/app/controllers/SupportTypeController';
import { NextApiRequest, NextApiResponse } from 'next';

const supportTypeController = new SupportTypeController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);
  try{
    if (req.method === 'GET') {
      await supportTypeController.getSupportTypeById(req, res);
    } else if (req.method === 'PUT') {
      await supportTypeController.updateSupportType(id, req.body, res);
    } else if (req.method === 'DELETE') {
      await supportTypeController.deleteSupportType(id, res);
    } else {
      res.status(405).end();
    }
  }
  catch(error){
    supportTypeController.handleError(error, res);
  }

}
