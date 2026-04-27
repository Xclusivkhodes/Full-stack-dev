import express from "express";
import bodyParser from "body-parser";
import mongoose, { connect } from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://xclusivkhoder_db_user:SfnPQH7tqk6h7tIW@cluster0.vkzrhwo.mongodb.net/?appName=Cluster0";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)),
  )
  .catch((err) => console.error(`An error occured: ${err.message}`));
