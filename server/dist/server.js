"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _db = require("./utils/db");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _config = _interopRequireDefault(require("./config"));

var _auth = require("./utils/auth");

var _char = _interopRequireDefault(require("./resources/characters/char.router"));

var _itemDB = _interopRequireDefault(require("./resources/itemDB/itemDB.router"));

var _item = _interopRequireDefault(require("./resources/items/item.router"));

var _user = _interopRequireDefault(require("./resources/user/user.router"));

var _currentitems = _interopRequireDefault(require("./resources/currentitems/currentitems.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const router = _express.default.Router();

app.disable("x-powered-by"); // middleware

app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan.default)("dev"));
app.use((0, _cors.default)()); // main-entry-point

app.post("/signup", _auth.signup);
app.post("/login", _auth.login);
app.get('/', (req, res) => {
  res.status(200).json('Welcome to the WoW-Class-Tracker Server');
}); // routes

app.use("/api", router);
app.use("/api", _auth.protect);
app.use("/api/user", _user.default);
app.use("/api/characters", _char.default);
app.use("/api/currentitems", _currentitems.default);
app.use("/api/items", _item.default);
app.use("/api/itemDB", _itemDB.default);
console.log('Port from config', _config.default.port);

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

exports.start = start;