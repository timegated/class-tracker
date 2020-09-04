"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = {
  secrets: {
    jwt: "secrets"
  },
  dbUrl: _dotenv.default.config().parsed.MONGODB_URI
};
exports.config = config;