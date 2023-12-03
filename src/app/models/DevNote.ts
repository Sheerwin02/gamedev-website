import { Model, DataTypes, Sequelize } from 'sequelize';
import ModelBase from '../base/ModelBase';

class DevNote extends ModelBase {
  public id!: number;
  public category!: string;
  public title!: string;
  public content!: string;
  public authorId!: number; // Assuming there's a Users table
  public authorName!: string;
  public version!: string;
  public visibilityLevel!: string; // Public, Private, Restricted
  public accessControl!: string; // Define access control (e.g., roles or permissions)
  public tags!: string; // Comma-separated list of tags
  public relatedIssueId!: number; // Assuming there's an Issues or Tickets table
  public postedDate!: Date;
  public deletedAt!: Date | null;

  static initialize(sequelize: Sequelize) {
    const attributes = {
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      authorId: {
        type: DataTypes.INTEGER,
        field: 'author_id',
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      authorName: {
        type: DataTypes.STRING,
        field: 'author_name',
        allowNull: true,
      },
      version: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      visibilityLevel: {
        type: DataTypes.STRING,
        field: 'visibility_level',
        allowNull: false,
      },
      accessControl: {
        type: DataTypes.STRING,
        field: 'access_control',
        allowNull: false,
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      relatedIssueId: {
        type: DataTypes.INTEGER,
        field: 'related_issue_id',
        allowNull: true,
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
      modelName: 'DevNote',
      tableName: 'game_dev_dev_notes',
    };

    const DevNote = this.initializeModel('DevNote', attributes, options, sequelize);

    return DevNote;
  }
}

export { DevNote };
