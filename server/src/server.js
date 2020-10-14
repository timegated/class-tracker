import express from "express";
import { json, urlencoded } from "body-parser";
import { connect } from "./utils/db";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import { signup, login, protect } from "./utils/auth";
import charRouter from "./resources/characters/char.router";
import itemDBRouter from './resources/itemDB/itemDB.router';
import itemRouter from "./resources/items/item.router";
import userRouter from "./resources/user/user.router";
import currentRouter from "./resources/currentitems/currentitems.router";

const app = express();
const router = express.Router();

app.disable("x-powered-by");

// middleware
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// main-entry-point
app.post("/signup", signup);
app.post("/login", login);

app.get('/', (req, res) => {
  res.status(200).json('Welcome to the WoW-Class-Tracker Server');
});

// routes
app.use("/api", router);
app.use("/api", protect);
app.use("/api/user", userRouter);
app.use("/api/characters", charRouter);
app.use("/api/currentitems", currentRouter);
app.use("/api/items", itemRouter);
app.use("/api/itemDB", itemDBRouter);

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`Server live on Port: ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
};