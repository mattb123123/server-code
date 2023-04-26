import First from "../Models/First.js";
import express from "express";

const router = express.Router();

const visitorRoute = router.put("/visitors/:id", (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const update = {
    referrer: data.referrer,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    dob: new Date(data.dob),
    number: data.number,
  };

  First.findByIdAndUpdate(id, update, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("ErrorS2...");
    } else {
      res.send("SavedV...");
    }
  });
});

export default visitorRoute;
