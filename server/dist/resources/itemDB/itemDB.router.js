"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _itemDB = require("./itemDB");

var _express = require("express");

const router = (0, _express.Router)(); // search route for specific armor types

router.get(['/:class', '/:name', '/:slot'], (req, res) => {
  const type = req.params;
  const subClass = (0, _itemDB.getItemSubClass)(_itemDB.armorFilter, type.class);
  console.log(subClass);
  console.log(type.class);
  res.status(200).json(subClass); // switch (type.class || type.name || type.slot) {
  //   case 'plate':
  //     return res.status(200).json(plate);
  //   case 'mail':
  //     return res.status(200).json(mail);
  //   case 'cloth':
  //     return res.status(200).json(cloth);
  //   case 'leather':
  //     return res.status(200).json(leather);
  //   case 'leather':
  //     return res.status(200).json(leather);
  //   case type.slot:
  //     return getItemSlots(plate, type.slot)
  //   default:
  //     return res.status(400).json({msg: 'Fall-through to default statement'});
  // }
});
var _default = router;
exports.default = _default;