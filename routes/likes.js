import express from "express";
//import read from "../controllers/likes/read.js";
import create from "../controllers/likes/create.js";
//import destroy from "../controllers/likes/destroy.js";

const likesRouter = express.Router();

//likesRouter.get("/", read);
likesRouter.post("/", create);
//likesRouter.delete("/:id", destroy);

export default likesRouter;
