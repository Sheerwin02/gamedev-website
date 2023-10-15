import { DataTypes, Model, Sequelize } from 'sequelize';

class Recruitment extends Model {
  public id!: number;
  public position!: string;
  public description!: string;
  public requirement!: string;
  public postedDate!: Date;
  public deletedAt!: Date | null;
}

const defineRecruitmentModel = (sequelize: Sequelize) => {
  Recruitment.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
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
    },
    {
      paranoid: true,
      sequelize,
      modelName: 'Recruitment',
      tableName: 'game_dev_recruitments',
    }
  );
  return Recruitment;
};

export { defineRecruitmentModel, Recruitment };
