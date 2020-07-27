"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

const env = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 5000;
const baseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  isProd: env === "production",
  port: PORT,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: "1hr"
  } // dbUrl: process.env.DB_URI,
  // dbOnline: `mongodb+srv://cheuser:${process.env.DB_KEY}.mongodb.net/class-tracker?retryWrites=true&w=majority`,

};
let envConfig = {};

switch (env) {
  case "dev":
  case "development":
    envConfig = require("./dev").config;
    break;

  case "test":
  case "testing":
    envConfig = require("./testing").config;
    break;

  default:
    envConfig = require("./dev").config;
}

var _default = (0, _lodash.merge)(baseConfig, envConfig);

exports.default = _default;