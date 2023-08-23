import City from "../../models/City.js";
import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  let newItinerary = req.body;
  try {
    let city = await City.findOne({ city: newItinerary.city_id });
    let city_id = await city._id;
    newItinerary.city_id = city_id;
    await Itinerary.create(newItinerary);

    return res.status(201).json({
      success: true,
      message: "Itinerary created",
      response: newItinerary._id,
    });
  } catch (error) {
    next(error);
  }
};
