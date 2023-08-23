import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    console.log(req.query.city);
    let searchObject = {};
    if (req.query.city) {
      searchObject.city = new RegExp("^" + req.query.city, "i");
    }
    let allCities = await City.find(
      searchObject,
      "country fundation photo city admin_id"
    )
      .select("country city photo smalldescription admin_id")
      .populate("admin_id", "name mail photo -_id");
    return res.status(200).json({
      success: true,
      message: "cities found",
      response: allCities,
    });
  } catch (error) {
    next(error);
  }
};
