import City from "../../models/City.js";
import User from "../../models/User.js";

export default async (req, res) => {
  let newCity = req.body;
  try {
    let user = await User.findOne({ mail: newCity.admin_id });
    let admin_id = await user._id;
    newCity.admin_id = admin_id;
    await City.create(newCity);

    return res.status(201).json({
      success: true,
      message: "city created",
      response: newCity._id,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "not created",
      response: null,
    });
  }
};
