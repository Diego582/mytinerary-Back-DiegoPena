import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
  try {
    let oneActivity = await Activity.findOne({ _id: req.params.id });

    return res.status(200).json({
      success: true,
      message: "Activity found",
      response: oneActivity,
    });
  } catch (error) {
    next(error);
  }
};
