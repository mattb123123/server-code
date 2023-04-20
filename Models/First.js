import mongoose from "mongoose";

const FirstSchema = new mongoose.Schema({
  url: String,
  referrer: String,
  email: String,
  firstName: String,
  lastName: String,
  dob: String,
  number: Number,
  city: String,
  state: String,
  zip: Number,
  checkbox: String,
  enrollment: Number,

  Date: {
    type: Date,
    default: Date.now,
  },
});

var First = mongoose.model("all-data", FirstSchema);

export default First;
