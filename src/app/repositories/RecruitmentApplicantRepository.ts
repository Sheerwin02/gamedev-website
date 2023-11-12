import { RecruitmentApplicant } from '../models/RecruitmentApplicant';
import RepositoryBase from '../base/RepositoryBase';
import DbHelper from '../db/DbHelper';

class RecruitmentApplicantRepository extends RepositoryBase<RecruitmentApplicant> {
  private static instance: RecruitmentApplicantRepository | null = null;

  private constructor(model: typeof RecruitmentApplicant) {
    super(model);
  }

  static getInstance(): RecruitmentApplicantRepository {
    if (!RecruitmentApplicantRepository.instance) {
      const sequelize = DbHelper.getInstance().getSequelize();

      // Initialize the RecruitmentApplicant model
      const model = RecruitmentApplicant.initialize(sequelize) as typeof RecruitmentApplicant;

      RecruitmentApplicantRepository.instance = new RecruitmentApplicantRepository(model);
    }
    return RecruitmentApplicantRepository.instance;
  }
}

export default RecruitmentApplicantRepository;
