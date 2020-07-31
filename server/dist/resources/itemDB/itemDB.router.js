"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemDB = require("./itemDB");

var _express = require("express");

const router = (0, _express.Router)(); // search route for specific armor types

router.get('/:class', (req, res) => {
  try {
    const itemClass = req.params.class;
    const items = (0, _itemDB.searchItems)(itemClass);
    console.log(req.params);
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
});
router.get('/:class/:slot', (req, res) => {
  try {
    const itemClass = req.params.class;
    const slot = req.params.slot;
    console.log(req.params);
    const slots = (0, _itemDB.searchItemSlots)(itemClass, slot);
    res.status(200).json(slots);
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
});
router.get('/:weapontype', (req, res) => {
  try {
    const weapon = req.params.weapontype;
    console.log(req.params);
    const weapons = (0, _itemDB.searchWeapons)(weapon);
    res.status(200).json(weapons);
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
});
var _default = router;
exports.default = _default;