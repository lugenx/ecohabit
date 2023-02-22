import { Router } from "express";
import {
  createHabit,
  updateHabit,
  deleteHabit,
  getAllHabits,
  getHabit,
} from "../controller/habitController.js";

const habitRouter = Router();

habitRouter.post("/", createHabit);
habitRouter.get("/", getAllHabits);
habitRouter.get("/:id", getHabit);
habitRouter.patch("/:id", updateHabit);
habitRouter.delete("/:id", deleteHabit);

export default habitRouter;
