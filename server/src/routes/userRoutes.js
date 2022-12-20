import { Router } from "express";
import { userLogin, userSignUp } from "../controller/userController.js";
const userRouter = Router();

userRouter.get("/login", userLogin);
userRouter.post("/signup", userSignUp);

export default userRouter;
