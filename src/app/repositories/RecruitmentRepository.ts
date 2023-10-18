import DbHelper from '../db/DbHelper';
import { Recruitment, defineRecruitmentModel } from '../models/Recruitment';
import RepositoryBase from './RepositoryBase';

class RecruitmentRepository extends RepositoryBase<Recruitment> {
  static instance: RecruitmentRepository;
  constructor() {
    super(defineRecruitmentModel(DbHelper.getInstance().getSequelize()));
  }

  static getInstance(): RecruitmentRepository {
    if (!RecruitmentRepository.instance) {
      RecruitmentRepository.instance = new RecruitmentRepository();
    }
    return RecruitmentRepository.instance;
  }
}

export default RecruitmentRepository;
