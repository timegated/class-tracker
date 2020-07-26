"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
const config = {
  secrets: {
    jwt: "secrets"
  },
  dbUrl: "mongodb://localhost:27017/class-tracker-testing",
  dbUrl_site: `mongodb+srv://cheuser:lU4iJeg9Vkr4ORHR@cluster0-g64dw.mongodb.net/class-tracker?retryWrites=true&w=majority`
};
exports.config = config;