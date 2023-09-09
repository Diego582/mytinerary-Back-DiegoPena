import express from "express";
import passport from "../middlewares/passport.js";

import register from "../controllers/auth/register.js";
import token from "../controllers/auth/token.js";
import signin from "../controllers/auth/signin.js";

import validator from "../middlewares/validator.js";
import existUser from "../middlewares/existUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isPassOk from "../middlewares/isPassOk.js";
import isValidToken from "../middlewares/isValidToken.js";

import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";
import signout from "../controllers/auth/signout.js";

const router = express.Router();

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

router.post(
  "/token",
  passport.authenticate("jwt", { session: false }),
  isValidToken,
  token
);

router.post(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  signout
);

export default router;
