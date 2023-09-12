import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let count = await City.countDocuments();
    let limit = Math.trunc(count / 4) * 4; // de esta manera trae siempre la mayor cantidad posible que no rompa el carousel
    let all = await City.find({}, "city photo")
      .sort({ fundation: -1 })
      .limit(limit);
    let dataCarousel = [];
    if (all.length > 0) {
      let arrayCities = [];
      let count = 0;
      for (let city of all) {
        count++;
        arrayCities.push(city);
        if (count > 3) {
          dataCarousel.push(arrayCities);
          count = 0;
          arrayCities = [];
        }
      }
    }

    return res.status(200).json({
      succes: true,
      message: "cities to show on carousel",
      data_carousel: dataCarousel,
    });
  } catch (error) {
    next(error);
  }
};
