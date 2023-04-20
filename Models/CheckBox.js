import mongoose from "mongoose";

const checkBoxSchema = new mongoose.Schema({
  checkBox: String,

  Date: {
    type: Date,
    default: Date.now,
  },
});

var CheckBox = mongoose.model("checkbox", checkBoxSchema);

export default CheckBox;
