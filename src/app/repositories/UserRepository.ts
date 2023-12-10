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

  async getByEmail(email: string, options?: { transaction: Transaction }): Promise<User | null> {
    const t: Transaction = options?.transaction || await this.sequelize.transaction();
  
    try {
      const user = await this.model.findOne({
        where: { email },
        transaction: options?.transaction || t,
      });
  
      if (!options?.transaction) await t.commit();
      return user;
    } catch (error) {
      if (!options?.transaction) await t.rollback();
      throw new CustomError(ErrorType.InternalServerError, 'Internal server error');
    }
  }
  /* #### Region Reset password #### */
  async updatePassword(id: number, newPassword: string, options?: { transaction: Transaction }): Promise<User> {
    const t: Transaction = options?.transaction || (await this.sequelize.transaction());

    try {
      const user = await this.getById(id);
      if (!user) {
        throw new CustomError(ErrorType.NotFound, `${this.model.name} not found`);
      }

      // Set the new password and save the record
      user.set('password', newPassword);
      await user.save({ transaction: t });

      if (!options?.transaction) await t.commit();
      return user;
    } catch (error) {
      if (!options?.transaction) await t.rollback();
      throw new CustomError(ErrorType.InternalServerError, 'Internal server error');
    }
  }

  async saveResetToken(userId: number, resetToken: string, expirationInSeconds: number, options?: { transaction?: Transaction }): Promise<void> {
    // Implement storing the reset token in the database, for example:
    const t: Transaction = options?.transaction || (await this.sequelize.transaction());
  
    try {
      const user = await this.getById(userId);
      if (!user) {
        throw new CustomError(ErrorType.NotFound, 'User not found');
      }
  
      // Set the reset token and its expiration time
      user.set('resetToken', resetToken);
      user.set('resetTokenExpiration', new Date(Date.now() + expirationInSeconds * 1000));
      await user.save({ transaction: t });
  
      if (!options?.transaction) await t.commit();
    } catch (error) {
      if (!options?.transaction) await t.rollback();
      throw new CustomError(ErrorType.InternalServerError, 'Internal server error');
    }
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
