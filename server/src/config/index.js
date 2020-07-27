import { merge } from "lodash";
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
    jwtExp: "1d",
  },
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

export default merge(baseConfig, envConfig);
