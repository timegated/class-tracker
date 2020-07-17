"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _db = require("./utils/db");

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _config = _interopRequireDefault(require("./config"));

var _auth = require("./utils/auth");

var _char = _interopRequireDefault(require("./resources/characters/char.router"));

var _item = _interopRequireDefault(require("./resources/items/item.router"));

var _user = _interopRequireDefault(require("./resources/user/user.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const router = _express.default.Router();

const corsOptions = {
  exposedHeaders: "Authorization"
};
app.disable("x-powered-by"); // middleware

app.use((0, _cors.default)(corsOptions));
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan.default)("dev")); // main-entry-point

app.post("/signup", _auth.signup);
app.post("/login", _auth.login);
app.get("/login", _auth.login); // routes

app.use("/api", router);
app.use("/api", _auth.protect);
app.use("/api/user", _user.default);
app.use("/api/characters", _char.default);
app.use("/api/item", _item.default);

if (process.env.NODE_ENV) {
  app.use(_express.default.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(_path.default.resolve(__dirname, "client", "build", "index.html"));
  });
}

const start = async () => {
  try {
    await (0, _db.connect)();
    app.listen(_config.default.port, () => {
      console.log(`Server live on Port: ${_config.default.port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();