import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
  
    let searchObject = {};
    if (req.query.city_id) {
      searchObject.city_id = req.query.city_id;
    }
    
    let allItineraries = await Itinerary.find(searchObject).populate({
      path: "city_id",
      select: "country photo city description admin_id ",
      populate: {
        path: "admin_id",
        select: "name photo",
      },
    });
    return res.status(200).json({
      success: true,
      message: "Itineraries found",
      response: allItineraries,
    });
  } catch (error) {
    next(error);
  }
};
