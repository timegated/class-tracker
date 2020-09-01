"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crud = require("../../utils/crud");

var _currentitems = require("./currentitems.model");

var _default = (0, _crud.crudControllers)(_currentitems.CurrentItem);

exports.default = _default;