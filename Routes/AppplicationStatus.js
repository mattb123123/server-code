import First from "../Models/First.js";
import express from "express";

const router = express.Router()

const ApplicationStatus = router.put("/application-status/:id", (req, res) => {
    const data = req.body;
    const id = req.param.id;
    const update = {
        applicationStatus: data.applicationStatus,
    }
    First.findByIdAndUpdate(id, update, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error4b...");
        } else {
          res.send("Saved4b...");
        }
      });
})

export default ApplicationStatus;
