import express from "express";
import userRouter from "./users.js";
import cityRouter from "./cities.js";
import itineraryRouter from "./itineraries.js";
import authRouter from "./auth.js";
import activityRouter from "./activities.js";
import likesRouter from "./likes.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/cities", cityRouter);
router.use("/itineraries", itineraryRouter);
router.use("/auth", authRouter);
router.use("/activities", activityRouter);
router.use("/likes", likesRouter);

export default router;
