import { User } from '../models/User';
import RepositoryBase from '../base/RepositoryBase';
import DbHelper from '../db/DbHelper';
import { Transaction } from 'sequelize';
import { CustomError, ErrorType } from '../db/errorHelper';

class UserRepository extends RepositoryBase<User> {
  private static instance: UserRepository | null = null;

  private constructor(model: typeof User) {
    super(model);
  }

  static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      const sequelize = DbHelper.getInstance().getSequelize();
      const model = User.initialize(sequelize) as typeof User;

      UserRepository.instance = new UserRepository(model);
    }
    return UserRepository.instance;
  }

  async enable(id: number, options?: { transaction: Transaction }): Promise<User> {
    return this.toggleEnable(id, 1, options);
  }

  async disable(id: number, options?: { transaction: Transaction }): Promise<User> {
    return this.toggleEnable(id, 0, options);
  }

  private async toggleEnable(id: number, value: number, options?: { transaction: Transaction }): Promise<User> {
    const t: Transaction = options?.transaction || await this.sequelize.transaction();

    try {
      const record = await this.getById(id);
      if (!record) {
        throw new CustomError(ErrorType.NotFound, `${this.model.name} not found`);
      }

      // Set the 'enabled' property to the specified value and save the record
      record.set('enabled', value);
      await record.save({ transaction: t });

      if (!options?.transaction) await t.commit();
      return record;
    } catch (error) {
      if (!options?.transaction) await t.rollback();
      throw new CustomError(ErrorType.InternalServerError, 'Internal server error');
    }
  }
}

export default UserRepository;
