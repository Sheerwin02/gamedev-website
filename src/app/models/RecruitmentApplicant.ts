import { Model, DataTypes, Sequelize } from 'sequelize';
import ModelBase from '../base/ModelBase';
import { Recruitment } from './Recruitment';

class RecruitmentApplicant extends ModelBase {
  public id!: number;
  public user_id!: number;
  public recruitment_id!: number;
  public message!: string;
  public delete_at!: Date | null;

  static initialize(sequelize: Sequelize) {
    const attributes = {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      recruitment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      delete_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    };

    const options = {
      paranoid: true,
      modelName: 'RecruitmentApplicant',
      tableName: 'game_dev_recruitment_applicants',
    };

    const RecruitmentApplicant = this.initializeModel('RecruitmentApplicant', attributes, options, sequelize);

    // RecruitmentApplicant.belongsTo(Recruitment, { foreignKey: 'recruitment_id' });

    return RecruitmentApplicant;
  }
}

export { RecruitmentApplicant };
