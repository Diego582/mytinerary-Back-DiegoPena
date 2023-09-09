import express from "express";
import read from "../controllers/activities/read.js";
import readOne from "../controllers/activities/readOne.js";
import create from "../controllers/activities/create.js";
import update from "../controllers/activities/update.js";
import destroy from "../controllers/activities/destroy.js";

const router = express.Router();

router.get("/", read);
router.post("/", create);

router.get("/:id", readOne);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
