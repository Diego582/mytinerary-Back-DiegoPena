import express from "express";
import read from "../controllers/cities/read.js";

const router = express.Router();

router.get("/", read);

export default router;
