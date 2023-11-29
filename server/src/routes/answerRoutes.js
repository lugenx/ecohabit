import { Router } from "express";
import {
  createAnswer,
  updateAnswer,
  deleteAnswer,
  getAnswer,
  getUserAnswers,
} from "../controller/answerController.js";

const answerRouter = Router();

answerRouter.get("/", getUserAnswers);
answerRouter.post("/", createAnswer);
answerRouter.get("/:id", getAnswer);
answerRouter.patch("/:id", updateAnswer);
answerRouter.delete("/:id", deleteAnswer);

export default answerRouter;
