import mongoose from "mongoose";

const TableSchema = new mongoose.Schema(
  {
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
    reservations: [
      { hour: Number, endHour: Number, date: Date },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Table", TableSchema);
