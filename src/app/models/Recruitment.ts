import { DataTypes, Model, Sequelize } from 'sequelize';

class Recruitment extends Model {
  public id!: number;
  public position!: string;
  public description!: string;
  public requirements!: string;
  public postedDate!: Date;
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
      requirements: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postedDate: {
        type: DataTypes.DATE,
        field: 'posted_date',
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Recruitment',
      tableName: 'game_dev_recruitments',
    }
  );
  return Recruitment; 
};

export { defineRecruitmentModel, Recruitment };
