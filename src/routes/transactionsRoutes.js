import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validadeAuth } from "../middlewares/validateAuthorization.js";
import { schemaTransaction } from "../schemas/transactionSchemas.js";
import { doTransaction, historyTransactions } from "../controllers/transactionController.js";

const transationRouter = Router();

transationRouter.use(validadeAuth);

transationRouter.post("/nova-transacao/:type", validateSchema(schemaTransaction), doTransaction);
transationRouter.get("/home", historyTransactions);

export default transationRouter;
