import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let count = await City.countDocuments();
    let limit = Math.trunc(count / 4) * 4; // de esta manera trae siempre la mayor cantidad posible que no rompa el carousel
    let all = await City.find({}, "city photo")
      .sort({ fundation: -1 })
      .limit(limit);
    return res.status(200).json({
      succes: true,
      message: "cities to show on carousel",
      data_carousel: all,
      count,
    });
  } catch (error) {
    next(error);
  }
};
