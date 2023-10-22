import { Model, DataTypes, Sequelize } from 'sequelize';
import ModelBase from '../base/ModelBase';

class Recruitment extends ModelBase {
  public id!: number;
  public position!: string;
  public description!: string;
  public requirement!: string;
  public postedDate!: Date;
  public deletedAt!: Date | null;

  static initialize(sequelize: Sequelize) {
    const attributes = {
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      requirement: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postedDate: {
        type: DataTypes.DATE,
        field: 'posted_date',
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    };

    const options = {
      paranoid: true,
      modelName: 'Recruitment',
      tableName: 'game_dev_recruitments',
    };

    return this.initializeModel('Recruitment', attributes, options, sequelize);
  }

  static associate(models: Record<string, typeof Model>) {
    // Define associations for the Recruitment model, if any
  }
}

export { Recruitment };
