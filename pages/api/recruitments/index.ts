import { getAllRecruitments, createRecruitment } from '@/app/controllers/RecruitmentController';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    await getAllRecruitments(req, res);
  } else if (req.method === 'POST') {
    await createRecruitment(req, res);
  } else {
    res.status(405).end(); 
  }
}
