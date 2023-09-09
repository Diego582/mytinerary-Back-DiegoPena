import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
  try {
    let searchObject = {};
    if (req.query.itinerary_id) {
      searchObject.itinerary_id = req.query.itinerary_id;
    }
    console.log(searchObject);
    let allActivities = await Activity.find(searchObject);
    return res.status(200).json({
      success: true,
      message: "Activities found",
      response: allActivities,
    });
  } catch (error) {
    next(error);
  }
};
