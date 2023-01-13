import mongoose from "mongoose";

const checkBoxSchema = new mongoose.Schema({
  box1: String,
  box2: String,
  box3: String,
  box4: String,
  box5: String,
  box6: String,
  box7: String,
  box8: String,
  box9: String,
  visitor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Visitors",
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

var CheckBox = mongoose.model("checkbox", checkBoxSchema);

export default CheckBox;
