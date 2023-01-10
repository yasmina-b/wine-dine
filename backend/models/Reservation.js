import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  endHour: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Reservation", ReservationSchema);
