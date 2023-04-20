import First from "../Models/First.js";
import express from "express";

const router = express.Router();

const firstRoute = router.post("/first", (req, res) => {
  const url = req.body.url;
  const referrer = req.body.referrer;
  const data = new First({
    url: url,
    referrer: referrer,
  });
  data.save((err, doc) => {
    if (err) {
      console.error(err);
      res.status(500).send({ error: "Error saving data to database" });
    } else {
      res.send({ _id: doc._id });
    }
  });
});

export default firstRoute;
