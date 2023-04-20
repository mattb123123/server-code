import mongoose from "mongoose";

const FirstSchema = new mongoose.Schema({
  email: String,
  first_name: String,
  Last_name: String,

  Date: {
    type: Date,
    default: Date.now,
  },
});

var Second = mongoose.model("second", FirstSchema);

export default Second;
