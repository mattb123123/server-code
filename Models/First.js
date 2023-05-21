import mongoose from "mongoose";

const FirstSchema = new mongoose.Schema({
  url: String,
  referrer: String,
  email: String,
  firstName: String,
  lastName: String,
  birthYear: Number,
  number: Number,
  promo: String,
  street: String,
  apartment: String,
  city: String,
  state: String,
  zip: Number,
  addressType: String,
  qualification: String,
  checkbox: [{ type: String }],
  enrollment: Number,

  Date: {
    type: Date,
    default: Date.now,
  },
});

var First = mongoose.model("all-data", FirstSchema);

export default First;
