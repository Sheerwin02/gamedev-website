import { NextApiRequest, NextApiResponse } from 'next';
import { RecruitmentController } from '@/app/controllers/RecruitmentController';

const recruitmentController = new RecruitmentController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      await recruitmentController.getAllRecruitments(req, res);
    } else if (req.method === 'POST') {
      await recruitmentController.createRecruitment(req, res);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    recruitmentController.handleError(error, res);
  }
}
