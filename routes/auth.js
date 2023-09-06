import { Router } from "express";
import register from "../controllers/auth/register.js";

let auth_router = Router();

auth_router.post("/signup", register);

export default auth_router;
