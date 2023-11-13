import { Model, DataTypes, Sequelize } from 'sequelize';

class ModelBase extends Model {
  static initializeModel(modelName: string, attributes: any, options: any, sequelize: Sequelize) {
    attributes.id = {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    };

    const model = this.init(attributes, { modelName, sequelize, ...options });

    return model;
  }
}

export default ModelBase;
