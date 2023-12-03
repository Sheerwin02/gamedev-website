import { NextApiRequest, NextApiResponse } from 'next';
import { DevNoteController } from '@/app/controllers/DevNoteController'; // Import DevNote controller

const devNoteController = new DevNoteController(); // Initialize the DevNote controller

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);
  try {
    if (req.method === 'GET') {
      await devNoteController.getDevNoteById(req, res);
    } else if (req.method === 'PUT') {
      await devNoteController.updateDevNote(id, req.body, res);
    } else if (req.method === 'DELETE') {
      await devNoteController.deleteDevNote(id, res);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    devNoteController.handleError(error, res);
  }
}
