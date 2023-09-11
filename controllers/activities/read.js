import Activity from "../../models/Activity.js";
import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let searchObject = {};
    let itinerariesSearch = [];
    if (req.query.itineraries) {
      searchObject.itineraries = req.query.itineraries;
    }

    if (searchObject.itineraries) {
      itinerariesSearch = searchObject.itineraries.split(",");
    }

    const activitiesPromise = itinerariesSearch.map(async (itinerary) => {
      return Activity.find({ itinerary_id: itinerary });
    });

    const resultActivities = await Promise.all(activitiesPromise);

    const allActivities = resultActivities.flat();
    return res.status(200).json({
      success: true,
      message: "Activities found",
      response: allActivities,
    });
  } catch (error) {
    next(error);
  }
};
