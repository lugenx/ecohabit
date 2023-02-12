import { Router } from "express";
import {
  createHabit,
  updateHabit,
  deleteHabit,
  getAll,
  getHabit,
} from "../controller/habitController.js";

const habitRouter = Router();

habitRouter.post("/", createHabit);
habitRouter.get("/", getAll);
habitRouter.get("/:id", getHabit);
habitRouter.patch("/:id", updateHabit);
habitRouter.delete("/:id", deleteHabit);

export default habitRouter;
