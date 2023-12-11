import { DataTypes, Model, Sequelize } from 'sequelize';
import ModelBase from '../base/ModelBase';


class SupportType extends ModelBase {
  public id!: number;
  public type!: string;
  public created_at!: Date;
  public updated_at!: Date;
  public deletedAat!: Date | null;
  

  static initialize(sequelize: Sequelize) {
    const attributes = {
        type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
     
    };

    const options = {
      paranoid: true,
      modelName: 'SupportTypes',
      tableName: 'game_dev_support_request_types',
    };

    const SupportType =  this.initializeModel('SupportTypes', attributes, options, sequelize);

    return SupportType;
  }
}

export { SupportType };
