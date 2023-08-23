import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let updatedItinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: "itinerary updated",
      response: updatedItinerary,
    });
  } catch (error) {
    next(error);
  }
};
