import { Router } from "express";
import transationRouter from "./transactionsRoutes.js";
import userRouter from "./usersRoutes.js";

const router = Router();

router.use(userRouter);
router.use(transationRouter);

export default router;