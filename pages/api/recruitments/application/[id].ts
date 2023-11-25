import { RecruitmentApplicantController } from '@/app/controllers/RecruitmentApplicantController';
import { NextApiRequest, NextApiResponse } from 'next';

const recruitmentApplicantController = new RecruitmentApplicantController();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);
  try{
    if (req.method === 'GET') {
      await recruitmentApplicantController.getRecruitmentApplicantById(req, res);
    } else if (req.method === 'PUT') {
      await recruitmentApplicantController.updateRecruitmentApplicant(id, req.body, res);
    } else if (req.method === 'DELETE') {
      await recruitmentApplicantController.deleteRecruitmentApplicant(id, res);
    } else {
      res.status(405).end();
    }
  }
  catch(error){
    recruitmentApplicantController.handleError(error, res);
  }

}
