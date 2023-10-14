import { updateRecruitment, deleteRecruitment } from '@/app/controllers/RecruitmentController';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id); 
  if (req.method === 'PUT') {
    await updateRecruitment(id, req.body, res);
  } else if (req.method === 'DELETE') {
    await deleteRecruitment(id, res);
  } else {
    res.status(405).end(); 
  }
}
