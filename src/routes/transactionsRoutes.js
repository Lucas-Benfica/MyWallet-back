import { Router } from "express";

// Importar as functions usadas no controler, lembrar do .js
//import { getUser, signin, signup } from "../controllers/usuarios.controller.js"
// Outras validações, vamos olhar direito oq fazem
/*
import { validateSchema } from "../middlewares/validateSchema.js"
import { schemaUsuario } from "../schemas/usuario.schemas.js"
import { validateAuth } from "../middlewares/validateAuth.js"
*/

const transationRouter = Router();

transationRouter.post("/sign-up", (req,res) => console.log(req.body));



export default transationRouter;