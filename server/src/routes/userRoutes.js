import { Router } from "express";
import verifyToken from "../middleware/auth.js";
import {
  userLogin,
  userSignUp,
  getMe,
  updateMe,
} from "../controller/userController.js";
const userRouter = Router();

userRouter.post("/login", userLogin);
userRouter.post("/signup", userSignUp);
userRouter.get("/me", verifyToken, getMe);
userRouter.patch("/me", verifyToken, updateMe);

export default userRouter;
