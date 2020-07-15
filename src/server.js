import express from "express";
import connect from "./utils";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import { signup, login, protect } from "./utils/auth";
const app = express();
const router = express.Router();

app.disable("x-powered-by");

// middleware
app.use(cors());
app.use(express.json({ extended: true }));
app.use(morgan("dev"));

// main-entry-point
app.post("/signup", signup);
app.post("/login", login);

// routes
app.use("/api", router);
app.use("/api", protect);

if (process.env.NODE_ENV) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(`Server live on Port: ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
};
start();
