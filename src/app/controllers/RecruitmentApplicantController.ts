import { NextApiRequest, NextApiResponse } from 'next';
import { ControllerBase } from '../base/ControllerBase';
import RecruitmentApplicantRepository from '../repositories/RecruitmentApplicantRepository';
import { verifyToken } from '../../../utils/auth';
import { AuthenticatedNextApiRequest } from '../../../types/custom';

const recruitmentApplicantRepository = RecruitmentApplicantRepository.getInstance();

export class RecruitmentApplicantController extends ControllerBase {
  constructor() {
    super();
  }

  public async getAllRecruitmentApplicants(req: NextApiRequest, res: NextApiResponse) {
    try {
      await verifyToken(req, res);
      const recruitmentApplicants = await recruitmentApplicantRepository.getAll();
      res.status(200).json(recruitmentApplicants);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async getRecruitmentApplicantById(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      await verifyToken(req, res);
      const recruitmentApplicant = await recruitmentApplicantRepository.getById(Number(id));
      if (recruitmentApplicant) {
        res.status(200).json(recruitmentApplicant);
      } else {
        res.status(404).json({ error: 'Recruitment Applicant not found' });
      }
    } catch (error) {
      this.handleError(error, res);
    }
  }

public async applyForRecruitment(req: AuthenticatedNextApiRequest, res: NextApiResponse) {
  try {
    // Get user information from the token
    const { userId } = await verifyToken(req, res);

    const { recruitmentId, message } = req.body;

    if (!recruitmentId || !message) {
      return res.status(400).json({ error: 'RecruitmentId and message are required in the request body' });
    }

    const recruitmentApplicant = await recruitmentApplicantRepository.create({
      user_id: userId,
      recruitment_id: recruitmentId,
      message,
    });

    res.status(201).json(recruitmentApplicant);
  } catch (error) {
    this.handleError(error, res);
  }
}


public async updateRecruitmentApplicant(
    id: number,
    data: { message: string },
    res: NextApiResponse
  ) {
    try {
      const { message } = data;

      if (!message) {
        return res.status(400).json({ error: 'Message is required in the request body for update' });
      }

      const updatedRecruitmentApplicant = await recruitmentApplicantRepository.update(id, {
        message,
      });

      res.status(200).json(updatedRecruitmentApplicant);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async deleteRecruitmentApplicant(id: number, res: NextApiResponse) {
    try {
      await recruitmentApplicantRepository.delete(id);
      res.status(204).end();
    } catch (error) {
      this.handleError(error, res);
    }
  }
}

