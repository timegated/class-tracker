"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
const config = {
  secrets: {
    jwt: "secrets"
  },
  dbUrl: `mongodb+srv://cheuser:${process.env.DB_PW}@cluster0-g64dw.mongodb.net/class-tracker?retryWrites=true&w=majority`
};
exports.config = config;