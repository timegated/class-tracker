"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crud = require("../../utils/crud");

var _char = require("./char.model");

var _default = (0, _crud.crudControllers)(_char.Characters);

exports.default = _default;