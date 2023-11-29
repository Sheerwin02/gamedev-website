import { NextApiRequest, NextApiResponse } from 'next';
import { DevNoteController } from '@/app/controllers/DevNoteController'; // Import DevNote controller

const devNoteController = new DevNoteController(); // Initialize the DevNote controller

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      await devNoteController.getAllDevNotes(req, res);
    } else if (req.method === 'POST') {
      await devNoteController.createDevNote(req, res);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    devNoteController.handleError(error, res);
  }
}
