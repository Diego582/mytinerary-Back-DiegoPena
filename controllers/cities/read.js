import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let cities = await City.find()
      .select("country city photo smalldescription admin_id")
      .populate("admin_id", "name mail photo -_id");
    return res.status(200).json({
      success: true,
      message: "cities found",
      response: cities,
    });
  } catch (error) {
    next(error);
  }
};
