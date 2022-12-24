import { Router } from "express";
import {
  createHabit,
  updateHabit,
  deleteHabit,
  getHabit,
} from "../controller/habitController.js";

const habitRouter = Router();

habitRouter.post("/", createHabit);
habitRouter.get("/:id", getHabit);
habitRouter.patch("/:id", updateHabit);
habitRouter.delete("/:id", deleteHabit);

export default habitRouter;
