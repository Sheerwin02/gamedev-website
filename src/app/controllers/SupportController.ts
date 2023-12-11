import { NextApiRequest, NextApiResponse } from 'next';
import { ControllerBase } from '../base/ControllerBase';
import SupportRepository from '../repositories/SupportRepository';
import { verifyToken } from '../../../utils/auth';

const supportRepository = SupportRepository.getInstance();

export class SupportController extends ControllerBase {
  constructor() {
    super();
  }

  public async getAllSupports(req: NextApiRequest, res: NextApiResponse) {
    try {
      // Use the authentication middleware to verify the JWT token
      //await verifyToken(req, res);

      // Continue with the actual API logic
      const support = await supportRepository.getAll();
      res.status(200).json(support);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async getSupportById(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      //await verifyToken(req, res);
      const support = await supportRepository.getById(Number(id));
      if (support) {
        res.status(200).json(support);
      } else {
        res.status(404).json({ error: 'Support not found' });
      }
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async createSupport(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { userId } = await verifyToken(req, res);
      const { requestTypeId, subject, description } = req.body;
      const support = await supportRepository.create({
        requestTypeId,
        userId,
        status : 'Pending',
        subject,
        description,
      });
      res.status(201).json(support);
    } catch (error) {
      this.handleError(error, res);
    }
  }
  public async updateSupport(id: number, data: {
    status: string;
    updated_at: Date;
  }, res: NextApiResponse) {
    try {
      const updatedSupport = await supportRepository.update(id, data);
      res.status(200).json(updatedSupport);
    } catch (error) {
      this.handleError(error, res);
    }
}

public async deleteSupport(id: number, res: NextApiResponse) {
  try {
    await supportRepository.delete(id);
    res.status(204).end();
  } catch (error) {
    this.handleError(error, res);
  }
}

public async markResolved(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    // Use the authentication middleware to verify the JWT token
    // await verifyToken(req, res);

    // Continue with the actual API logic
    const existingSupport = await supportRepository.getById(Number(id));

    if (!existingSupport) {
      res.status(404).json({ error: 'Support not found' });
      return;
    }

    if (existingSupport.status !== 'Pending') {
      res.status(400).json({ error: 'Support is not in Pending status' });
      return;
    }

    const updatedSupport = await supportRepository.update(Number(id), {
      status: 'Resolved',
      updated_at: new Date(),
    });

    res.status(200).json(updatedSupport);
  } catch (error) {
    this.handleError(error, res);
  }
}

}