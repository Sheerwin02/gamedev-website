import { DataTypes, Model, Sequelize } from 'sequelize';
import ModelBase from '../base/ModelBase';


class Support extends ModelBase {
  public id!: number;
  public request_type_id!: number;
  public user_id!: number;
  public status!: string;
  public subject!: string;
  public description!: string;
  public created_at!: Date;
  public updated_at!: Date;
  public deletedAat!: Date | null;
  

  static initialize(sequelize: Sequelize) {
    const attributes = {
        requestTypeId: {
        type: DataTypes.INTEGER,
        field: 'request_type_id',
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending',
        allowNull: false,
      
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
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
      modelName: 'Support',
      tableName: 'game_dev_supports',
    };

    const Support =  this.initializeModel('Support', attributes, options, sequelize);

    return Support;
  }
}

export { Support };
