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
  const raidItems = _itemDB.default.filter(i => i.itemLevel >= 66 && i.itemLevel <= 80 && i.contentPhase <= 5 && i.requiredLevel === 60 && i.quality === 'Epic').sort((a, b) => {
    return a.itemLevel - b.itemLevel;
  });

  try {
    res.status(200).json(raidItems.map(raidItem => {
      return {
        name: raidItem.name,
        icon: raidItem.icon,
        quality: raidItem.quality,
        class: raidItem.class,
        subclass: raidItem.subclass,
        slot: raidItem.slot,
        itemLevel: raidItem.itemLevel,
        uniqueName: raidItem.uniqueName,
        contentPhase: raidItem.contentPhase
      };
    }));
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg: "Something\'s amiss with / route"
    });
  }
});
router.get('/:name', (req, res) => {
  try {
    const item = _itemDB.default.filter(i => i.uniqueName === req.params.name);

    res.status(200).json(item.map(i => {
      return {
        name: i.name,
        icon: i.icon,
        quality: i.quality,
        class: i.class,
        subclass: i.subclass,
        slot: i.slot,
        itemLevel: i.itemLevel,
        uniqueName: i.uniqueName,
        contentPhase: i.contentPhase
      };
    }));
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg: "Something bad happened with name route"
    });
  }
});
router.get('/:subclass'), (req, res) => {
  try {
    const subClass = _itemDB.default.filter(i => i.subclass === req.params.subclass);

    res.status(200).json(subClass.map(i => {
      return {
        name: i.name,
        icon: i.icon,
        quality: i.quality,
        class: i.class,
        subclass: i.subclass,
        slot: i.slot,
        itemLevel: i.itemLevel,
        uniqueName: i.uniqueName,
        contentPhase: i.contentPhase
      };
    }));
  } catch (error) {}
};
var _default = router;
exports.default = _default;