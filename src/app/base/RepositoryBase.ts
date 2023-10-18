import { Sequelize, Model, Transaction, ModelStatic } from 'sequelize';
import DbHelper from '../db/DbHelper';
import { CustomError, ErrorType } from '../db/errorHelper';

class RepositoryBase<T extends Model> {
    private readonly sequelize: Sequelize;
    private readonly model: ModelStatic<T>;

constructor(model: ModelStatic<T>) {
    this.sequelize = DbHelper.getInstance().getSequelize();
    this.model = model;
}

async getById(id: number): Promise<T | null> {
    try {
        const record = await this.model.findByPk(id);
        return record;
    } catch (error) {
        throw new CustomError(ErrorType.NotFound, `${this.model.name} not found`);
    }
}

  async getAll(): Promise<T[]> {
    try {
      const records = await this.model.findAll();
      return records;
    } catch (error) {
      throw new CustomError(ErrorType.InternalServerError, 'Internal server error');
    }
  }

  async create(data: any, options?: { transaction: Transaction }): Promise<T> {
    const t: Transaction = options?.transaction || await this.sequelize.transaction();

    try {
      const record = await this.model.create(data, { transaction: t });
      if (!options?.transaction) await t.commit();
      return record;
    } catch (error) {
      if (!options?.transaction) await t.rollback();
      throw new CustomError(ErrorType.ValidationError, 'Invalid data');
    }
  }

  async update(id: number, data: any, options?: { transaction: Transaction }): Promise<T> {
    const t: Transaction = options?.transaction || await this.sequelize.transaction();

    try {
      const record = await this.getById(id);
      if (!record) {
        throw new CustomError(ErrorType.NotFound, `${this.model.name} not found`);
      }

      await record.update(data, { transaction: t });
      if (!options?.transaction) await t.commit();
      return record;
    } catch (error) {
      if (!options?.transaction) await t.rollback();
      throw new CustomError(ErrorType.ValidationError, 'Invalid data');
    }
  }

  async delete(id: number, options?: { transaction: Transaction }): Promise<void> {
    const t: Transaction = options?.transaction || await this.sequelize.transaction();

    try {
      const record = await this.getById(id);
      if (!record) {
        throw new CustomError(ErrorType.NotFound, `${this.model.name} not found`);
      }
      await record.destroy({ transaction: t });
      if (!options?.transaction) await t.commit();
    } catch (error) {
      if (!options?.transaction) await t.rollback();
      throw new CustomError(ErrorType.InternalServerError, 'Internal server error');
    }
  }
}

export default RepositoryBase;
