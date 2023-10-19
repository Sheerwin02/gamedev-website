import { Recruitment } from '../models/Recruitment';
import RepositoryBase from '../base/RepositoryBase';
import DbHelper from '../db/DbHelper';

class RecruitmentRepository extends RepositoryBase<Recruitment> {
  private static instance: RecruitmentRepository | null = null;

  private constructor(model: typeof Recruitment) {
    super(model);
  }

  static getInstance(): RecruitmentRepository {
    if (!RecruitmentRepository.instance) {
      const sequelize = DbHelper.getInstance().getSequelize();

      // Initialize the Recruitment model
      const model = Recruitment.initialize(sequelize) as typeof Recruitment;

      RecruitmentRepository.instance = new RecruitmentRepository(model);
    }
    return RecruitmentRepository.instance;
  }
}

export default RecruitmentRepository;
