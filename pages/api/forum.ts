import { ForumController } from "@/app/controllers/ForumController";
import { NextApiRequest, NextApiResponse } from "next";

const forumController = new ForumController();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Method: " + req.method);

  try {
    if (req.method === "GET") {
      await forumController.getAllTopics(res);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    forumController.handleError(error, res);
  }
}
