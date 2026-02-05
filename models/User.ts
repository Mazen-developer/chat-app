import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  { collection: "test" } 
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
