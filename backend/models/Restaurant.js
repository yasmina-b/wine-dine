import mongoose from "mongoose";
import Reservation from "./Reservation.js";
import Table from "./Table.js"

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
  image: { type: String, required: true, unique: false },
  category: { type: String, required: true, unique: false },
  address: { type: String, required: true, unique: false },
  schedule: { type: String, required: true, unique: false },
  opensAt: { type: Number, required: true, unique: false },
  closesAt: { type: Number, required: true, unique: false },
  rating: { type: Number, min: 0, max: 5 },
  averageCost: { type: Number, required: false },
  website: { type: String },
  menu: { type: String },
  maps: { type: String },
  tables: [ { type: Table.schema }],
  reservations: [ { type: Reservation.schema } ],
});
export default mongoose.model("Restaurant", RestaurantSchema);
