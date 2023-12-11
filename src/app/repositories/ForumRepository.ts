import RepositoryBase from "../base/RepositoryBase";
import DbHelper from "../db/DbHelper";
import { CustomError, ErrorType } from "../db/errorHelper";
import { Forum } from "../models/Forum";
import { ForumTopic } from "../models/ForumTopic";

class ForumRepository extends RepositoryBase<Forum> {
  private static instance: ForumRepository | null = null;

  private constructor(model: typeof Forum) {
    super(model);
  }

  static getInstance(): ForumRepository {
    if (!ForumRepository.instance) {
      const sequelize = DbHelper.getInstance().getSequelize();

      const model = Forum.initialize(sequelize) as typeof Forum;

      ForumRepository.instance = new ForumRepository(model);
    }

    return ForumRepository.instance;
  }

  async getAll(): Promise<Forum[]> {
    try {
      //   const records = await this.model.findAll({
      //     order: [["createdDate", "DESC"]],
      //   });

      // Find all forums with topic at game_dev_forum_topic
      const records = await this.model.findAll({
        // include: [
        //   {
        //     model: ForumTopic,
        //     // model: this.model.sequelize!.models.ForumTopic,
        //     attributes: ["title"],
        //     required: true,
        //   },
        // ],
      });

      return records;
    } catch (error: any) {
      console.log(error.message);

      throw new CustomError(
        ErrorType.InternalServerError,
        "Internal server error"
      );
    }
  }
}

export default ForumRepository;
