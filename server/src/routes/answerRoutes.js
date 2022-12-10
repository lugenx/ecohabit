import { Router } from "express";
import {
  createAnswer,
  updateAnswer,
  deleteAnswer,
  getAnswer,
} from "../controller/answerController.js";

const answerRouter = Router();

answerRouter.post("/", createAnswer);
answerRouter.get("/:id", getAnswer);
answerRouter.patch("/:id", updateAnswer);
answerRouter.delete("/:id", deleteAnswer);

export default answerRouter;
