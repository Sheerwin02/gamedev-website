import { DataTypes, Sequelize } from "sequelize";
import ModelBase from "../base/ModelBase";
import { Forum } from "./Forum";

class ForumTopic extends ModelBase {
  public id!: number;
  public title?: string;
  public referenceId!: string;

  static initialize(sequelize: Sequelize) {
    const attributes = {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      referenceId: {
        type: DataTypes.STRING,
        fields: "reference_id",
        allowNull: false,
      },
    };

    const options = {
      paranoid: true,
      modelName: "ForumTopic",
      tableName: "game_dev_forum_topic",
    };

    const ForumTopic = this.initializeModel(
      "ForumTopic",
      attributes,
      options,
      sequelize
    );

    // Forum has one Forum Topic
    Forum.hasOne(sequelize.models.ForumTopic, {
      foreignKey: "reference_id",
      sourceKey: "id",
      as: "forumTopic",
    });

    // Forum Topic belongs to Forum
    ForumTopic.belongsTo(sequelize.models.Forum, {
      foreignKey: "reference_id",
      targetKey: "id",
      as: "forum",
    });

    return ForumTopic;
  }
}

export { ForumTopic };
