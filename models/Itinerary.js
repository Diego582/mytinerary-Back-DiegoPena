//Definir el modelo Itinerary con las propiedades name,price,duration,tags,photo
// y se referencia con la colección cities con la propiedad city_id

import { model, Schema, Types } from "mongoose";

let collection = "itineraries";

let schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    tags: { type: Array, required: true },
    photo: { type: String, required: true },
    city_id: { type: Types.ObjectId, required: true, ref: "cities" },
  },
  { timestamps: true }
);

let Itinerary = model(collection, schema);

export default Itinerary;
