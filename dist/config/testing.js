"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
const config = {
  secrets: {
    jwt: 'secrets'
  },
  dbUrl: `mongodb://localhost:27017/class-tracker`
};
exports.config = config;