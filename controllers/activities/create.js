import Activity from "../../models/Activity.js";
import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  let newActivity = req.body;
  try {
    let itinerary = await Itinerary.findOne({ name: newActivity.itinerary_id });
    let itinerary_id = await itinerary._id;
    newActivity.itinerary_id = itinerary_id;
    await Activity.create(newActivity);

    return res.status(201).json({
      success: true,
      message: "Activity created",
      response: newActivity._id,
    });
  } catch (error) {
    next(error);
  }
};
