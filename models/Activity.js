//Luego definir el modelo Activity con las propiedades name,photo
//y se relaciona con la colección iteneraries con la propiedad itinerary_id

import { model, Schema, Types } from "mongoose";

let collection = "activities";

let schema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  itinerary_id: { type: Types.ObjectId, required: true, ref: "itineraries" },
});

let Activity = model(collection, schema);

export default Activity;
