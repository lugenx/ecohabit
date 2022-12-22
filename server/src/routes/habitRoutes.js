import { Router } from "express";
import {
  createHabit,
  updateHabit,
  deleteHabit,
  getHabit,
} from "../controller/habitController.js";
import { verifyToken } from "../middleware/auth.js";

const habitRouter = Router();

habitRouter.post("/", verifyToken, createHabit);
habitRouter.get("/:id", verifyToken, getHabit);
habitRouter.patch("/:id", verifyToken, updateHabit);
habitRouter.delete("/:id", verifyToken, deleteHabit);

export default habitRouter;
