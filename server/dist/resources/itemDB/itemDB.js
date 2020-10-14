"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchWeapons = exports.searchItemSlots = exports.searchItems = void 0;

var _itemDButils = require("../../utils/itemDButils");

// find items by subclass
const searchItems = itemClass => {
  const items = (0, _itemDButils.mapItems)(_itemDButils.armorFilter);
  const searchTerm = (0, _itemDButils.makeSearchWork)(itemClass);
  const searchSubClass = items.filter(i => i.subclass === searchTerm);
  return searchSubClass;
}; // find items by subclass and slot


exports.searchItems = searchItems;

const searchItemSlots = (subClass, slot) => {
  const items = (0, _itemDButils.mapItems)(_itemDButils.armorFilter);
  const sC = (0, _itemDButils.makeSearchWork)(subClass);
  const s = (0, _itemDButils.makeSearchWork)(slot);
  const searchSlots = items.filter(i => i.subclass === sC && i.slot === s);
  return searchSlots;
}; // find weapons by subclass


exports.searchItemSlots = searchItemSlots;

const searchWeapons = weapons => {
  const items = (0, _itemDButils.mapItems)(_itemDButils.weaponFilter);
  const subClass = (0, _itemDButils.makeSearchWork)(weapons);
  const weaponTypes = items.filter(i => i.subclass === subClass);
  return weaponTypes;
};

exports.searchWeapons = searchWeapons;