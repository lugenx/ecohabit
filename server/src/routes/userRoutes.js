import { Router } from "express";
import verifyToken from "../middleware/auth.js";
import {
  userLogin,
  userSignUp,
  getMe,
  updateMe,
  deleteMe,
  addHabit,
  removeHabit,
} from "../controller/userController.js";
const userRouter = Router();

userRouter.post("/login", userLogin);
userRouter.post("/signup", userSignUp);
userRouter.get("/me", verifyToken, getMe);
userRouter.patch("/me", verifyToken, updateMe);
userRouter.delete("/me", verifyToken, deleteMe);
userRouter.post("/:userId/myhabits/:habitId", verifyToken, addHabit);
userRouter.delete("/:userId/myhabits/:habitId", verifyToken, removeHabit);

export default userRouter;
