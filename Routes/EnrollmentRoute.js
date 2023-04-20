import First from "../Models/First.js";
import express from "express";

const router = express.Router();

const enrollmentRoute = router.put("/pageen/:id", (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const update = {
    enrollment: data.enrollment,
  };
  First.findByIdAndUpdate(id, update, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("ErrorS4...");
    } else {
      res.send("SavedS4...");
    }
  });
});

export default enrollmentRoute;
