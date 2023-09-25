import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  email: String,
  first_name: String,
  Last_name: String,
  url: String,
  referrer: String,
  event_D879783EF143E744: String,
  event_57222C9B13297433: String,
  event_4456F347C1F3A319: String,
  event_2C63E1597EFBF7EF: String,
  event_EA52E17083B3E660: String,
  event_363367129F3EC28B: String,
  event_D69C6A65ADE84F05: String,
  event_5393AA0788A7D8D0: String,
  event_0703901EE3A33318: String,
  event_08571335E12EA438: String,
  event_C6358E5826A9B775: String,
  event_59C6AC93492CC957: String,
  event_2067E2D9851A138A: String,
  event_23361E0F68EC065B: String,
  event_E4974F999BC8D6DB: String,
  event_1B82AB56D5CFF17D: String,
  event_D93771045A0FD065: String,
  Date: {
    type: Date,
    default: Date.now,
  },
});

var Visitors = mongoose.model("visitor", visitorSchema);

export default Visitors;
