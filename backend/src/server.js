import cors from "cors";
import express from "express";
import { PORT, DB } from "./config.js";
import mongoose from "mongoose";
import path from "path";
import errorController from "./controllers/error.controller.js";
import registerRouter from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(process.cwd(), "public")));

app.use(registerRouter);

app.use(errorController.ERRORS);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => console.log(`Server running on ${PORT} port !`));
