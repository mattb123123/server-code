import First from "../Models/First.js";
import express from "express";

const router = express.Router();

const pageTwoRoute = router.put("/page-two/:id", (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const update = {
    street: data.street,
    apartment: data.apartment,
    city: data.city,
    state: data.state,
    zip: data.zip,
    addressType: data.addressType,
  };
  First.findByIdAndUpdate(id, update, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("ErrorS2...");
    } else {
      res.send("SavedS2...");
    }
  });
});

export default pageTwoRoute;
