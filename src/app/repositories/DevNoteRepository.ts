import { DevNote } from '../models/DevNote';
import RepositoryBase from '../base/RepositoryBase';
import DbHelper from '../db/DbHelper';

class DevNoteRepository extends RepositoryBase<DevNote> {
  private static instance: DevNoteRepository | null = null;

  private constructor(model: typeof DevNote) {
    super(model);
  }

  static getInstance(): DevNoteRepository {
    if (!DevNoteRepository.instance) {
      const sequelize = DbHelper.getInstance().getSequelize();

      // Initialize the DevNote model
      const model = DevNote.initialize(sequelize) as typeof DevNote;

      DevNoteRepository.instance = new DevNoteRepository(model);
    }
    return DevNoteRepository.instance;
  }
}

export default DevNoteRepository;
