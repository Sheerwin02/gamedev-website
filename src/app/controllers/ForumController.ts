import { NextApiRequest, NextApiResponse } from "next";
import { ControllerBase } from "../base/ControllerBase";
import ForumRepository from "../repositories/ForumRepository";

const forumRepository = ForumRepository.getInstance();

export class ForumController extends ControllerBase {
  constructor() {
    super();
  }

  public async getAllTopics(res: NextApiResponse) {
    try {
      //   const forums = await forumRepository.getCustomListBasedOnSQL(
      //     "SELECT * FROM game_dev_forum"
      //   );

      const forums = await forumRepository.getAll();

      console.log("Forum: " + forums);
      res.status(200).json(forums);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async getTopicById(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      const forums = await forumRepository.getById(Number(id));
      if (forums) {
        res.status(200).json(forums);
      } else {
        res.status(404).json({ error: "Forum not found" });
      }
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async createTopic(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { title, content, memberId, status, isReply } = req.body;
      const forums = await forumRepository.create({
        title,
        content,
        memberId,
        status,
        isReply,
      });
      res.status(201).json(forums);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async updateTopic(
    id: number,
    data: {
      title?: string;
      content: string;
      memberId: string;
      status: string;
      isReply: boolean;
    },
    res: NextApiResponse
  ) {
    try {
      const updatedRecruitment = await forumRepository.update(id, data);
      res.status(200).json(updatedRecruitment);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async deleteTopic(id: number, res: NextApiResponse) {
    try {
      await forumRepository.delete(id);
      res.status(204).end();
    } catch (error) {
      this.handleError(error, res);
    }
  }
}
