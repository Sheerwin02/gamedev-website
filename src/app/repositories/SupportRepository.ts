import { Support } from '../models/Support';
import RepositoryBase from '../base/RepositoryBase';
import DbHelper from '../db/DbHelper';

class SupportRepository extends RepositoryBase<Support> {
  private static instance: SupportRepository | null = null;

  private constructor(model: typeof Support) {
    super(model);
  }

  static getInstance(): SupportRepository {
    if (!SupportRepository.instance) {
      const sequelize = DbHelper.getInstance().getSequelize();

      // Initialize the Recruitment model
      const model = Support.initialize(sequelize) as typeof Support;

      SupportRepository.instance = new SupportRepository(model);
    }
    return SupportRepository.instance;
  }
}

export default SupportRepository;
