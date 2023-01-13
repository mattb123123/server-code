import Enrollment from "../Models/Enrollment.js";
import express from "express";

const router = express.Router();

const enrollmentRoute = router.post("/pageen", (req, res) => {
  const document = new Enrollment({ ...req.body, visitor: req.body.visitorId });
  console.log(req.body);
  document.save((error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: error });
      return;
    }
    // res.send({ result: "Data saved to the database" });
  });
});

export default enrollmentRoute;
