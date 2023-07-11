import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validadeAuth } from "../middlewares/validateAuthorization.js";
import { schemaUser } from "../schemas/userSchemas.js"; 
import { logout, signIn, signUp } from "../controllers/usersController.js";

const userRouter = Router();

userRouter.post("/cadastro", validateSchema(schemaUser), signUp);
userRouter.post("/", signIn);
userRouter.get("/logout", validadeAuth, logout);

export default userRouter;