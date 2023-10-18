import { NextApiRequest, NextApiResponse } from 'next';
import { ControllerBase } from '../base/ControllerBase';
import RecruitmentRepository from '../repositories/RecruitmentRepository';

const recruitmentRepository = RecruitmentRepository.getInstance();

export class RecruitmentController extends ControllerBase {
  constructor() {
    super();
  }

  public async getAllRecruitments(req: NextApiRequest, res: NextApiResponse) {
    try {
      const recruitments = await recruitmentRepository.getAll();
      res.status(200).json(recruitments);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async getRecruitmentById(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      const recruitment = await recruitmentRepository.getById(Number(id));
      if (recruitment) {
        res.status(200).json(recruitment);
      } else {
        res.status(404).json({ error: 'Recruitment not found' });
      }
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async createRecruitment(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { position, description, requirement, postedDate } = req.body;
      const recruitment = await recruitmentRepository.create({
        position,
        description,
        requirement,
        postedDate: new Date(postedDate),
      });
      res.status(201).json(recruitment);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async updateRecruitment(id: number, data: {
      position: string;
      description: string;
      requirement: string;
      postedDate: Date;
    }, res: NextApiResponse) {
      try {
        const updatedRecruitment = await recruitmentRepository.update(id, data);
        res.status(200).json(updatedRecruitment);
      } catch (error) {
        this.handleError(error, res);
      }
  }

  public async deleteRecruitment(id: number, res: NextApiResponse) {
    try {
      await recruitmentRepository.delete(id);
      res.status(204).end();
    } catch (error) {
      this.handleError(error, res);
    }
  }
}
