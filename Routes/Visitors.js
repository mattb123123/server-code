import First from "../Models/First.js";
import express from "express";

const router = express.Router();

const visitorRoute = router.put("/visitors/:id", (req, res) => {
const visitorRoute = router.post("/visitors", (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const update = {


  var update = new First( {
    url: data.url,
    referrer: data.referrer,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    birthYear: data.doy,
    number: data.number,
    promo: data.promo,
    event_D879783EF143E744: data.event_D879783EF143E744,
    event_57222C9B13297433: data.event_57222C9B13297433,
    event_4456F347C1F3A319: data.event_4456F347C1F3A319,
    event_2C63E1597EFBF7EF: data.event_2C63E1597EFBF7EF,
    event_EA52E17083B3E660: data.event_EA52E17083B3E660,
    event_363367129F3EC28B: data.event_363367129F3EC28B,
    event_D69C6A65ADE84F05: data.event_D69C6A65ADE84F05,
    event_5393AA0788A7D8D0: data.event_5393AA0788A7D8D0,
    event_0703901EE3A33318: data.event_0703901EE3A33318,
    event_08571335E12EA438: data.event_08571335E12EA438,
    event_C6358E5826A9B775: data.event_C6358E5826A9B775,
    event_59C6AC93492CC957: data.event_59C6AC93492CC957,
    event_2067E2D9851A138A: data.event_2067E2D9851A138A,
    event_23361E0F68EC065B: data.event_23361E0F68EC065B,
    event_E4974F999BC8D6DB: data.event_E4974F999BC8D6DB,
    event_1B82AB56D5CFF17D: data.event_1B82AB56D5CFF17D,
    event_D93771045A0FD065: data.event_D93771045A0FD065,
  };

  First.findByIdAndUpdate(id, update, (err) => {
  });


  update.save((err, doc) => {
    if (err) {
      console.error(err);
      res.status(500).send("ErrorS2...");
      res.status(500).send({ error: "Error saving data to database" });
    } else {
      res.send("SavedV...");
      res.send({ _id: doc._id });
    }
  });
   

							

});

export default visitorRoute;	
