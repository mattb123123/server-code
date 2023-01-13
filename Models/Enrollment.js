import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema({
  enrollment: String,
  visitor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Visitors",
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

var Enrollment = mongoose.model("enrollment", EnrollmentSchema);

export default Enrollment;
