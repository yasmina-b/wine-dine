import mongoose from "mongoose";
import Reservation from "./Reservation.js";


const TableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  reservations: [ { type: Reservation.schema } ]
  
  // tableNumber: [{ number: Number, unavailableDates: { type: [Date] }}],
});

export default mongoose.model("Table", TableSchema);
