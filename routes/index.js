import express from "express";
import userRouter from "./users.js";
import cityRouter from "./cities.js";
const router = express.Router();

router.use("/users", userRouter);
router.use("/cities", cityRouter);

export default router;
