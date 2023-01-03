import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: false },
});

export default mongoose.model("Category", CategorySchema);