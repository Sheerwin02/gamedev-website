import { NextApiRequest, NextApiResponse } from 'next';
import { ControllerBase } from '../base/ControllerBase';
import SupportTypeRepository from '../repositories/SupportTypeRepository';
import { verifyToken } from '../../../utils/auth';

const supportTypeRepository = SupportTypeRepository.getInstance();

export class SupportTypeController extends ControllerBase {
  constructor() {
    super();
  }

  public async getAllSupportsTypes(req: NextApiRequest, res: NextApiResponse) {
    try {
      // Use the authentication middleware to verify the JWT token
      //await verifyToken(req, res);

      // Continue with the actual API logic
      const supportType = await supportTypeRepository.getAll();
      res.status(200).json(supportType);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async getSupportTypeById(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      //await verifyToken(req, res);
      const supportType = await supportTypeRepository.getById(Number(id));
      if (supportType) {
        res.status(200).json(supportType);
      } else {
        res.status(404).json({ error: 'Support Type not found' });
      }
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async createSupportType(req: NextApiRequest, res: NextApiResponse) {
    try {
      //await verifyToken(req, res);
      const { type } = req.body;
      const supportType = await supportTypeRepository.create({
        type,
      });
      res.status(201).json(supportType);
    } catch (error) {
      this.handleError(error, res);
    }
  }
  public async updateSupportType(id: number, data: {
    status: string;
    updated_at: Date;
  }, res: NextApiResponse) {
    try {
      const updatedSupportType = await supportTypeRepository.update(id, data);
      res.status(200).json(updatedSupportType);
    } catch (error) {
      this.handleError(error, res);
    }
}

public async deleteSupportType(id: number, res: NextApiResponse) {
  try {
    await supportTypeRepository.delete(id);
    res.status(204).end();
  } catch (error) {
    this.handleError(error, res);
  }
}

}