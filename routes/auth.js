import { Router } from "express";
import register from "../controllers/auth/register.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import existUser from "../middlewares/existUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import signin from "../controllers/auth/signin.js";
import signinSchema from "../schemas/signin.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isPassOk from "../middlewares/isPassOk.js";
import isValidToken from "../middlewares/isValidToken.js";
import token from "../controllers/auth/token.js";

let router = Router();

router.post(
  "/signup",
  validator(registerSchema),
  existUser,
  isValidPass,
  register
);
router.post(
  "/signin",
  validator(signinSchema),
  notExistsUser,
  isPassOk,
  isValidToken,
  signin
);

router.post("/token", token);

export default router;
