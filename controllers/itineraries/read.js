import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    /*  console.log(req.query.city);
    let searchObject = {};
    if (req.query.city) {
      searchObject.city = new RegExp("^" + req.query.city, "i");
    } */
    let allItineraries = await Itinerary.find().populate("city_id");
    return res.status(200).json({
      success: true,
      message: "Itineraries found",
      response: allItineraries,
    });
  } catch (error) {
    next(error);
  }
};
