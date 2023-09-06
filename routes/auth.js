import { Router } from "express";
import register from "../controllers/auth/register.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import existUser from "../middlewares/existUser.js";
import isValidPass from "../middlewares/isValidPass.js";

let auth_router = Router();

auth_router.post(
  "/signup",
  validator(registerSchema),
  existUser,
  isValidPass,
  register
);

export default auth_router;
