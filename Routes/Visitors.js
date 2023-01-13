import Visitors from "../Models/VisitorsData.js";
import express from "express";

const router = express.Router();

const visitorRoute = router.post("/visitors", (req, res) => {
  const document = new Visitors(req.body);
  // console.log(req.body);
  document.save((error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: error });
    } else {
      res.status(200).send({ visitorId: result._id });
    }
    // res.send({ result: "Data saved to the database" });
  });
});

export default visitorRoute;
