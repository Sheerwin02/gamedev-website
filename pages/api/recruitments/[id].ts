import { NextApiRequest, NextApiResponse } from 'next';
import { RecruitmentController } from '@/app/controllers/RecruitmentController';

const recruitmentController = new RecruitmentController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);
  if (req.method === 'GET') {
    await recruitmentController.getRecruitmentById(req, res);
  } else if (req.method === 'PUT') {
    await recruitmentController.updateRecruitment(id, req.body, res);
  } else if (req.method === 'DELETE') {
    await recruitmentController.deleteRecruitment(id, res);
  } else {
    res.status(405).end();
  }
}
