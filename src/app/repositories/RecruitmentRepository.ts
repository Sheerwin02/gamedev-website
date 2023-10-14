import { Sequelize, Model } from 'sequelize';
import DbHelper from '../db/DbHelper';
import { CustomError, ErrorType } from '../db/errorHelper';

class RecruitmentRepository {
  private static instance: RecruitmentRepository;
  private readonly sequelize: Sequelize;

  private constructor() {
    this.sequelize = DbHelper.getInstance().getSequelize();
  }

  static getInstance(): RecruitmentRepository {
    if (!RecruitmentRepository.instance) {
      RecruitmentRepository.instance = new RecruitmentRepository();
    }
    return RecruitmentRepository.instance;
  }

  async findRecruitmentById(id: number): Promise<Model | null> {
    try {
      return await this.sequelize.models.Recruitment.findByPk(id);
    } catch (error) {
      throw new CustomError(ErrorType.NotFound, 'Recruitment not found');
    }
  }

  async getRecruitments(): Promise<Model[]> {
    try {
      return await this.sequelize.models.Recruitment.findAll();
    } catch (error) {
      throw new CustomError(ErrorType.InternalServerError, 'Internal server error');
    }
  }

  async createRecruitment(data: {
    position: string;
    description: string;
    requirements: string;
    postedDate: Date;
  }): Promise<Model> {
    const t = await this.sequelize.transaction();
    try {
      const recruitment = await this.sequelize.models.Recruitment.create(data, { transaction: t });
      await t.commit();
      return recruitment;
    } catch (error) {
      await t.rollback();
      throw new CustomError(ErrorType.ValidationError, 'Invalid data');
    }
  }

  async updateRecruitment(id: number, data: {
    position: string;
    description: string;
    requirements: string;
    postedDate: Date;
  }): Promise<Model> {
    const t = await this.sequelize.transaction();
    try {
      const recruitment = await this.findRecruitmentById(id);
      if (!recruitment) {
        throw new CustomError(ErrorType.ValidationError, 'Recruitment not found');
      }

      await recruitment.update(data, { transaction: t });
      await t.commit();
      return recruitment;
    } catch (error) {
      await t.rollback();
      throw new CustomError(ErrorType.ValidationError, 'Invalid data');
    }
  }

  async deleteRecruitment(id: number): Promise<void> {
    const t = await this.sequelize.transaction();
    try {
      const recruitment = await this.findRecruitmentById(id);
      if (!recruitment) {
        throw new CustomError(ErrorType.NotFound, 'Recruitment not found');
      }

      await recruitment.destroy({ transaction: t });
      await t.commit();
    } catch (error) {
      await t.rollback();
      throw new CustomError(ErrorType.InternalServerError, 'Internal server error');
    }
  }
}

export default RecruitmentRepository;
