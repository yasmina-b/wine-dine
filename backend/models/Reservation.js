import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  hour: {
    type: Number,
    required: true,
  },
  endHour: {
    type: Number
  },
});

export default mongoose.model("Reservation", ReservationSchema);
