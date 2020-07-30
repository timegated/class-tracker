"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _itemDB = _interopRequireDefault(require("./itemDB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', (req, res) => {
  const raidItems = _itemDB.default.filter(i => i.itemLevel >= 75 && i.requiredLevel === 60 && i.quality === 'Epic');

  try {
    res.status(200).json(raidItems);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg: "Something\'s amiss with / route"
    });
  }
});
router.get('/:name', (req, res) => {
  try {
    const item = _itemDB.default.filter(i => {
      if (i.uniqueName === req.params.name) {
        return {
          name: i.name,
          icon: i.icon
        };
      }
    });

    res.status(200).json({
      item
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg: "Something bad happened with name route"
    });
  }
});
var _default = router;
exports.default = _default;