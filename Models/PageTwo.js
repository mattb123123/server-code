import mongoose from "mongoose";

const PageTwoSchema = new mongoose.Schema({
  city: String,
  state: String,
  zip: Number,
  visitor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Visitors",
  },

  Date: {
    type: Date,
    default: Date.now,
  },
});

var PageTwo = mongoose.model("pagetwo", PageTwoSchema);

export default PageTwo;
