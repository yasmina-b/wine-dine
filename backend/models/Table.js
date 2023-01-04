import mongoose from "mongoose";

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
  tableNumber: [{ number: Number, unavailableDates: { type: [Date] }}],
});

export default mongoose.model("Table", TableSchema);
