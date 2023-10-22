import { DataTypes, Sequelize } from 'sequelize';
import ModelBase from '../base/ModelBase';
import bcrypt from 'bcrypt';

class User extends ModelBase {
  public id!: number;
  public name!: string;
  public phoneNumber!: string;
  public password!: string;
  public email!: string;
  public enabled!: number;
  public deletedAat!: Date | null;
  public isAdmin!: number;

  static initialize(sequelize: Sequelize) {
    const attributes = {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        field: 'phone_number',
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: [['email', 'deletedAt']],
          msg: 'Email address is already in use or soft-deleted.',
        },
      },
      enabled: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isIn: {
            args: [[0, 1]],
            msg: 'enabled must be 0 or 1',
          },
        },
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      isAdmin: {
        type: DataTypes.INTEGER,
        field: 'is_admin',
        defaultValue: 0,
        allowNull: false,
        validate: {
          isIn: {
            args: [[0, 1]],
            msg: 'isAdmin must be 0 or 1',
          },
        },
      },
    };

    const options = {
      paranoid: true,
      modelName: 'User',
      tableName: 'game_dev_users',
      hooks: {
        // Before creating a user, hash the password
        beforeCreate: async (user: any) => {
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(user.password, saltRounds);
          user.password = hashedPassword;
        },
        // Before updating a user, hash the new password if it's provided
        beforeUpdate: async (user: any) => {
          if (user.changed('password')) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);
            user.password = hashedPassword;
          }
        },        
      },
    };

    return this.initializeModel('User', attributes, options, sequelize);
  }

  static associate(models: any) {
    // Define associations for the User model, if any
  }
}

export { User };
