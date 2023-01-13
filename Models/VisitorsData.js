import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  email: String,
  first_name: String,
  Last_name: String,
  url: String,
  referrer: String,
  Date: {
    type: Date,
    default: Date.now,
  },
});

var Visitors = mongoose.model("visitor", visitorSchema);

export default Visitors;
