import { NextApiRequest, NextApiResponse } from 'next';
import { ControllerBase } from '../base/ControllerBase';
import DevNoteRepository from '../repositories/DevNoteRepository';
import { verifyToken } from '../../../utils/auth';

const devNoteRepository = DevNoteRepository.getInstance();

export class DevNoteController extends ControllerBase {
  constructor() {
    super();
  }

  public async getAllDevNotes(req: NextApiRequest, res: NextApiResponse) {
    try {
      const devNotes = await devNoteRepository.getAll();
      res.status(200).json(devNotes);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async getDevNoteById(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      // Uncomment the line below if you want to require token verification
      // await verifyToken(req, res);
      const devNote = await devNoteRepository.getById(Number(id));
      if (devNote) {
        res.status(200).json(devNote);
      } else {
        res.status(404).json({ error: 'DevNote not found' });
      }
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async createDevNote(req: NextApiRequest, res: NextApiResponse) {
    try {
      // Uncomment the line below if you want to require token verification
      // await verifyToken(req, res);
      const { category, title, content, authorId, authorName, version, visibilityLevel, accessControl, tags, relatedIssueId, postedDate } = req.body;
      const devNote = await devNoteRepository.create({
        category,
        title,
        content,
        authorId,
        authorName,
        version,
        visibilityLevel,
        accessControl,
        tags,
        relatedIssueId,
        postedDate: new Date(postedDate),
      });
      res.status(201).json(devNote);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async updateDevNote(id: number, data: {
      category: string;
      title: string;
      content: string;
      authorId: number;
      authorName: string;
      version: string;
      visibilityLevel: string;
      accessControl: string;
      tags: string;
      relatedIssueId: number;
      postedDate: Date;
    }, res: NextApiResponse) {
      try {
        const updatedDevNote = await devNoteRepository.update(id, data);
        res.status(200).json(updatedDevNote);
      } catch (error) {
        this.handleError(error, res);
      }
  }

  public async deleteDevNote(id: number, res: NextApiResponse) {
    try {
      await devNoteRepository.delete(id);
      res.status(204).end();
    } catch (error) {
      this.handleError(error, res);
    }
  }
}
