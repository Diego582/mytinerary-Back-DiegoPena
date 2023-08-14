import City from "../../models/City.js";

export default async (req, res) => {
  try {
    let cities = await City.find();
    return res.status(200).json({
      success: true,
      message: "cities found",
      response: cities,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "not found",
      response: null,
    });
  }
};
