import { Sequelize, Model, Transaction } from 'sequelize';

import DbHelper from '../db/DbHelper';
import { CustomError, ErrorType } from '../db/errorHelper';
import { Recruitment, defineRecruitmentModel } from '../models/Recruitment';

class RecruitmentRepository {
  private static instance: RecruitmentRepository;
  private readonly sequelize: Sequelize;
  private readonly RecruitmentModel: typeof Recruitment;

  private constructor() {
    this.sequelize = DbHelper.getInstance().getSequelize();
    this.RecruitmentModel = defineRecruitmentModel(this.sequelize);
  }

  static getInstance(): RecruitmentRepository {
    if (!RecruitmentRepository.instance) {
      RecruitmentRepository.instance = new RecruitmentRepository();
    }
    return RecruitmentRepository.instance;
  }

  async findRecruitmentById(id: number): Promise<Model | null> {
    try {
      const recruitment = await this.RecruitmentModel.findByPk(id);
      return recruitment;
    } catch (error) {
      throw new CustomError(ErrorType.NotFound, 'Recruitment not found');
    }
  }

  async getRecruitments(): Promise<Model[]> {
    try {
      const recruitments = await this.RecruitmentModel.findAll();
      return recruitments;
    } catch (error) {
      throw new CustomError(ErrorType.InternalServerError, 'Internal server error');
    }
  }

  async createRecruitment(data: {
    position: string;
    description: string;
    requirement: string;
    postedDate: Date;
  }): Promise<Model> {
    const t: Transaction = await this.sequelize.transaction();

    try {
      const recruitment = await this.RecruitmentModel.create(data, { transaction: t });
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
    requirement: string;
    postedDate: Date;
  }): Promise<Model> {
    const t: Transaction = await this.sequelize.transaction();

    try {
      const recruitment = await this.findRecruitmentById(id);
      if (!recruitment) {
        throw new CustomError(ErrorType.NotFound, 'Recruitment not found');
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
    const t: Transaction = await this.sequelize.transaction();

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
