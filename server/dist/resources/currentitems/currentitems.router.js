"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _currentitems = _interopRequireDefault(require("./currentitems.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.route("/").get(_currentitems.default.getMany).post(_currentitems.default.createOne);
router.route("/:id").get(_currentitems.default.getOne).put(_currentitems.default.updateOne).delete(_currentitems.default.removeOne);
var _default = router;
exports.default = _default;