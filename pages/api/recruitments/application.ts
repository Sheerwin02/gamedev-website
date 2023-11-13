import { RecruitmentApplicantController } from '@/app/controllers/RecruitmentApplicantController';
import { NextApiRequest, NextApiResponse } from 'next';


const recruitmentApplicantController = new RecruitmentApplicantController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      await recruitmentApplicantController.getAllRecruitmentApplicants(req, res);
    } else if (req.method === 'POST') {
      await recruitmentApplicantController.applyForRecruitment(req, res);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    recruitmentApplicantController.handleError(error, res);
  }
}
