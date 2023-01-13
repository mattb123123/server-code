import express from "express";
// import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import { connectDB } from "./connectDB/db.js";
import visitorRoute from "./Routes/Visitors.js";
import pageTwoRoute from "./Routes/PageTwoRoute.js";
import checkBoxRoute from "./Routes/CheckBoxRoute.js";
import enrollmentRoute from "./Routes/EnrollmentRoute.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

connectDB();

app.get("/api/test", (req, res) => {
  res.send("Test working");
});

app.use("/", visitorRoute);
app.use("/", pageTwoRoute);
app.use("/", checkBoxRoute);
app.use("/", enrollmentRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
