import { Model, DataTypes, Sequelize } from 'sequelize';
import ModelBase from '../base/ModelBase';
import { RecruitmentApplicant } from './RecruitmentApplicant';

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

    const Recruitment = this.initializeModel('Recruitment', attributes, options, sequelize);

    // Recruitment.hasMany(RecruitmentApplicant, { foreignKey: 'recruitment_id' });

    return Recruitment;
  }
}

export { Recruitment };
