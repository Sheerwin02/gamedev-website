import { Model, DataTypes, Sequelize } from 'sequelize';

class ModelBase extends Model {
  static initializeModel(modelName: string, attributes: any, options: any, sequelize: Sequelize) {
    attributes.id = {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    };

    return this.init(attributes, { modelName, sequelize, ...options });
  }

  static setupAssociations(models: Record<string, typeof Model>) {
    // Define associations for the model, if any
  }
}

export default ModelBase;
