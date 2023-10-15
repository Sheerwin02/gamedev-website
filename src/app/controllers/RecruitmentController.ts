
import { NextApiRequest, NextApiResponse } from 'next';
import { CustomError, ErrorType } from '../db/errorHelper';
import RecruitmentRepository from '../repositories/RecruitmentRepository';

const recruitmentRepository = RecruitmentRepository.getInstance();

export async function getAllRecruitments(req: NextApiRequest, res: NextApiResponse) {
  try {
    const recruitments = await recruitmentRepository.getRecruitments();
    res.status(200).json(recruitments);
  } catch (error) {
    handleError(error, res);
  }
}

export async function createRecruitment(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { position, description, requirement, postedDate } = req.body;
    const recruitment = await recruitmentRepository.createRecruitment({
      position,
      description,
      requirement,
      postedDate: new Date(postedDate),
    });
    res.status(201).json(recruitment);
  } catch (error) {
    handleError(error, res);
  }
}

// Implement other controller methods (updateRecruitment, deleteRecruitment) similarly
export async function updateRecruitment(id: number, data: {
    position: string;
    description: string;
    requirements: string;
    postedDate: Date;
  }, res: NextApiResponse) {
    try {
      const updatedRecruitment = await recruitmentRepository.updateRecruitment(id, data);
      res.status(200).json(updatedRecruitment);
    } catch (error) {
      handleError(error, res);
    }
  }
  
  export async function deleteRecruitment(id: number, res: NextApiResponse) {
    try {
      await recruitmentRepository.deleteRecruitment(id);
      res.status(204).end();
    } catch (error) {
      handleError(error, res);
    }
  }
  
function handleError(error: unknown, res: NextApiResponse) {
    if (error instanceof Error) {
      let statusCode = 500;
  
      if (error instanceof CustomError) {
        if (error.type === ErrorType.NotFound) {
          statusCode = 404;
        } else if (error.type === ErrorType.ValidationError) {
          statusCode = 400;
        }
      }
  
      res.status(statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
