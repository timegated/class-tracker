"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchItemSlots = exports.searchItems = void 0;

var _itemDButils = require("../../utils/itemDButils");

// find items by subclass
const searchItems = subClass => {
  const items = (0, _itemDButils.mapItems)(_itemDButils.armorFilter);
  const searchTerm = (0, _itemDButils.makeSearchWork)(subClass);
  const searchSubClass = items.filter(i => i.subclass === searchTerm);
  return searchSubClass;
}; // find items by subclass and slot


exports.searchItems = searchItems;

const searchItemSlots = (subClass, slot) => {
  const items = (0, _itemDButils.mapItems)(_itemDButils.armorFilter);
  const sC = (0, _itemDButils.makeSearchWork)(subClass);
  const s = (0, _itemDButils.makeSearchWork)(slot);
  console.log('From getItemSlots: ', sC);
  console.log('From getItemSlots: ', s);
  const searchSlots = items.filter(i => i.subclass === sC && i.slot === s);
  console.log(searchSlots);
  return searchSlots;
};

exports.searchItemSlots = searchItemSlots;