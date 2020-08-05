"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protect = exports.login = exports.signup = exports.verifyToken = exports.newToken = void 0;

var _config = _interopRequireDefault(require("../config"));

var _user = require("../resources/user/user.model");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const newToken = user => {
  return _jsonwebtoken.default.sign({
    id: user.id
  }, _config.default.secrets.jwt, {
    expiresIn: _config.default.secrets.jwtExp
  });
};

exports.newToken = newToken;

const verifyToken = token => new Promise((resolve, reject) => {
  _jsonwebtoken.default.verify(token, _config.default.secrets.jwt, (err, payload) => {
    if (err) return reject(err);
    resolve(payload);
  });
});

exports.verifyToken = verifyToken;

const signup = async (req, res) => {
  const {
    name,
    email,
    realm,
    password
  } = req.body;

  if (!name || !email || !realm || !password) {
    return res.status(400).send({
      message: "No fields can be blank"
    });
  }

  try {
    const user = await _user.User.create(req.body);
    const token = newToken(user);
    return res.status(201).send({
      token
    });
  } catch (error) {
    return res.status(500).end();
  }
};

exports.signup = signup;

const login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({
      message: "Fields cannot be blank"
    });
  }

  const invalid = {
    message: "Invalid email or password"
  };

  try {
    const user = await _user.User.findOne({
      email: req.body.email
    }).select("email password").populate("characters").exec();

    if (!user) {
      return res.status(401).send(invalid);
    }

    const match = await user.checkPassword(req.body.password);

    if (!match) {
      return res.status(401).send(invalid);
    }

    const token = newToken(user);
    return res.status(201).send({
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

exports.login = login;

const protect = async (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).end();
  }

  const token = bearer.split("Bearer ")[1].trim();
  let payload;

  try {
    payload = await verifyToken(token);
  } catch (error) {
    return res.status(401).end();
  }

  const user = await _user.User.findById(payload.id).select("-password").lean().exec();

  if (!user) {
    return res.status(401).end();
  }

  req.user = user;
  next();
};

exports.protect = protect;