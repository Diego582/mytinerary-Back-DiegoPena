import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let oneUser = await User.findOne({ _id: req.params.id }).select(
      "mail photo -_id"
    );
    return res.status(200).json({
      success: true,
      message: "user found",
      response: oneUser,
    });
  } catch (error) {
    next(error);
  }
};
