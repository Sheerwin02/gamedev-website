import { Sequelize } from 'sequelize';

class DbHelper {
  private static instance: DbHelper;
  private sequelize: Sequelize;

  private constructor() {
    this.sequelize = new Sequelize({
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      dialect: 'mysql',
      logging: true,
      define: {
        underscored: true, // Convert camelCase to snake_case for field names
      },
    });
    
  }

  public static getInstance(): DbHelper {
    if (!DbHelper.instance) {
      DbHelper.instance = new DbHelper();
    }
    return DbHelper.instance;
  }

  public getSequelize(): Sequelize {
    return this.sequelize;
  }
}

export default DbHelper;
