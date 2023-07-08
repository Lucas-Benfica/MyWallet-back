import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { schemaUser } from "../schemas/userSchemas.js"; 
import { signIn, signUp } from "../controllers/usersController.js";

const userRouter = Router();

userRouter.post("/cadastro", validateSchema(schemaUser), signUp);
userRouter.post("/", signIn);

export default userRouter;