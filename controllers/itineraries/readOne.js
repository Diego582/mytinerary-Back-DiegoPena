import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let oneItinerary = await Itinerary.findOne({ _id: req.params.id });
    return res.status(200).json({
      success: true,
      message: "Itinerary found",
      response: oneItinerary,
    });
  } catch (error) {
    next(error);
  }
};
