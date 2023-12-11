import { DataTypes, Sequelize } from "sequelize";
import ModelBase from "../base/ModelBase";

class Forum extends ModelBase {
  public id!: number;
  public title?: string;
  public content!: string;
  public memberName!: string;
  public status!: string;
  public referenceId!: string;
  public isReply: boolean = false;
  public createdDate!: Date;
  public updatedDate!: Date;

  static initialize(sequelize: Sequelize) {
    const attributes = {
      title: {
        type: DataTypes.VIRTUAL,
        allowNull: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      memberName: {
        type: DataTypes.VIRTUAL,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reference_id: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isReply: {
        type: DataTypes.VIRTUAL,
        allowNull: false,
      },
    };

    const options = {
      paranoid: true,
      modelName: "Forum",
      tableName: "game_dev_forum",
    };

    const Forum = this.initializeModel("Forum", attributes, options, sequelize);

    // // Forum has one Forum Topic
    // Forum.hasOne(sequelize.models.ForumTopic, {
    //   foreignKey: "reference_id",
    //   sourceKey: "id",
    //   as: "forumTopic",
    // });

    // // Forum Topic belongs to Forum
    // ForumTopic.belongsTo(sequelize.models.Forum, {
    //   foreignKey: "reference_id",
    //   targetKey: "id",
    //   as: "forum",
    // });

    return Forum;
  }

  // async getCustomListBasedOnSQL(sql: string): Promise<T[]> {
  //   try {
  //     const records = await this.sequelize.query(sql, {
  //       type: "SELECT",
  //     });

  //     return records as T[];
  //   } catch (error) {
  //     throw new CustomError(
  //       ErrorType.InternalServerError,
  //       "Internal server error"
  //     );
  //   }
  // }
}

export { Forum };
