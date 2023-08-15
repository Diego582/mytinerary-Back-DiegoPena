import City from "../../models/City.js";

export default async (req, res) => {
  try {
    let updatedCity = await City.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      message: "city updated",
      response: updatedCity,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "not updated",
      response: null,
    });
  }
};
