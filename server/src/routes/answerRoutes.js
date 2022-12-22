import { Router } from "express";
import {
  createAnswer,
  updateAnswer,
  deleteAnswer,
  getAnswer,
} from "../controller/answerController.js";
import { verifyToken } from "../middleware/auth.js";

const answerRouter = Router();

answerRouter.post("/", verifyToken, createAnswer);
answerRouter.get("/:id", verifyToken, getAnswer);
answerRouter.patch("/:id", verifyToken, updateAnswer);
answerRouter.delete("/:id", verifyToken, deleteAnswer);

export default answerRouter;
