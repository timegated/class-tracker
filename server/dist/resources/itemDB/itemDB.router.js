"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemDB = require("./itemDB");

var _express = require("express");

const router = (0, _express.Router)(); // search route for specific armor types

router.get('/:class', (req, res) => {
  const sC = req.params.class; // const s = req.params.slot;

  const subClass = (0, _itemDB.searchItems)(sC); // const slot = searchItemSlots(sC, s);

  console.log(req.params);
  res.status(200).json(subClass);
});
router.get('/:class/:slot', (req, res) => {
  const sC = req.params.class;
  const s = req.params.slot;
  console.log(req.params);
  const slots = (0, _itemDB.searchItemSlots)(sC, s);
  res.status(200).json(slots);
});
var _default = router;
exports.default = _default;