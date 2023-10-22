import { User } from '../models/User'; // Import User model
import RepositoryBase from '../base/RepositoryBase';
import DbHelper from '../db/DbHelper';

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
}

export default UserRepository;
