"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemFilter = exports.armorFilter = exports.weaponFilter = exports.makeSearchWork = exports.mapItems = void 0;

var _wowClassicItems = _interopRequireDefault(require("wow-classic-items"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const item = new _wowClassicItems.default.Items();

const mapItems = filter => {
  const items = filter.map(filterItem => {
    return {
      name: filterItem.name,
      itemLevel: filterItem.itemLevel,
      requiredLevel: filterItem.requiredLevel,
      class: filterItem.class,
      subclass: filterItem.subclass,
      slot: filterItem.slot,
      icon: filterItem.icon
    };
  });
  return items;
};

exports.mapItems = mapItems;

const makeSearchWork = string => {
  if (string === undefined) {
    return;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}; // item filters
// weapons


exports.makeSearchWork = makeSearchWork;
const weaponFilter = item.filter(i => i.requiredLevel === 60 && i.itemLevel >= 66 && i.itemLevel <= 100 && i.quality === 'Epic' || i.class === 'Weapon').sort((a, b) => {
  return a.itemLevel - b.itemLevel;
}); // armor

exports.weaponFilter = weaponFilter;
const armorFilter = item.filter(i => i.requiredLevel === 60 && i.itemLevel >= 66 && i.itemLevel <= 88 && i.quality === 'Epic' && i.class === 'Armor').sort((a, b) => {
  return a.itemLevel - b.itemLevel;
}); // general

exports.armorFilter = armorFilter;
const itemFilter = item.filter(i => i.requiredLevel === 60 && i.itemLevel >= 66 && i.itemLevel <= 88 && i.quality === 'Epic');
exports.itemFilter = itemFilter;