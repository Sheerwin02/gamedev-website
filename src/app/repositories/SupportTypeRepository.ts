import { SupportType } from '../models/SupportType';
import RepositoryBase from '../base/RepositoryBase';
import DbHelper from '../db/DbHelper';

class SupportTypeRepository extends RepositoryBase<SupportType> {
  private static instance: SupportTypeRepository | null = null;

  private constructor(model: typeof SupportType) {
    super(model);
  }

  static getInstance(): SupportTypeRepository {
    if (!SupportTypeRepository.instance) {
      const sequelize = DbHelper.getInstance().getSequelize();

      // Initialize the Recruitment model
      const model = SupportType.initialize(sequelize) as typeof SupportType;

      SupportTypeRepository.instance = new SupportTypeRepository(model);
    }
    return SupportTypeRepository.instance;
  }
}

export default SupportTypeRepository;
