import { compareSync } from "bcrypt";
import User from "../models/User.js";

export default async (req, res, next) => {
  try {
    let formPass = req.body.password;
    console.log(formPass, "formPass");
    let user = await User.findOne({ mail: req.body.mail });
    let mongoPass = user.password;
    console.log(mongoPass, "mongoPass");

    let verified = compareSync(formPass, mongoPass);
    console.log(verified, "verified");
    if (verified) {
      return next();
    } else {
      return res.status(401).json({
        success: false,
        message: "invalid credentials",
        response: null,
      });
    }
  } catch (error) {
    return next(error);
  }
};
