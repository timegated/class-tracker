"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _char = _interopRequireDefault(require("./char.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prettier/prettier */
const router = (0, _express.Router)(); // /api/characters

router.route("/").get(_char.default.getMany).post(_char.default.createOne); // /api/characters/:id

router.route("/:id").get(_char.default.getOne).put(_char.default.updateOne).delete(_char.default.removeOne);
var _default = router;
exports.default = _default;