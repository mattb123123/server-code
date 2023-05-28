import First from "../Models/First.js";
import express from "express";

const router = express.Router();

const addressError = router.put("/address-error/:id", (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const update = {
    addressType: data.addressType,
  };
  First.findByIdAndUpdate(id, update, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("ErrorS4...");
    } else {
      res.send("SavedER...");
    }
  });
});

export default addressError;
