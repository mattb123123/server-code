import First from "../Models/First.js";
import express from "express";

const router = express.Router();

const visitorRoute = router.post("/visitors", (req, res) => {
  const data = req.body;

  
  const update = new First( {
    url: data.url,
    referrer: data.referrer,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    birthYear: data.doy,
    number: data.number,
    promo: data.promo,
  });


  update.save((err, doc) => {
    if (err) {
      console.error(err);
      res.status(500).send({ error: "Error saving data to database" });
    } else {
      res.send({ _id: doc._id });
    }
  });


});

export default visitorRoute;
