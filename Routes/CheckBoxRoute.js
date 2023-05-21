import First from "../Models/First.js";
import express from "express";

const router = express.Router();

const checkBoxRoute = router.put("/check/:id", (req, res) => {
  const data = req.body;
  const id = req.params.id;

  const update = {
    checkbox: data.programs,
    qualification: data.qualification,
  };
  First.findByIdAndUpdate(id, update, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("ErrorS3...");
    } else {
      res.send("SavedS3...");
    }
  });
});

export default checkBoxRoute;
