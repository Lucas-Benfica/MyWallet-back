import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { schemaUser } from "../schemas/userSchemas.js"; 
import { getUser, signIn, signUp } from "../controllers/usersController.js";
import { validadeAuth } from "../middlewares/validateAuthorization.js";

/*
import { validateAuth } from "../middlewares/validateAuth.js"
*/

const userRouter = Router();

userRouter.post("/cadastro", validateSchema(schemaUser), signUp);
userRouter.post("/", signIn);
userRouter.get("/home", validadeAuth, getUser);



export default userRouter;