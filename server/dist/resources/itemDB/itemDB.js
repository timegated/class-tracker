"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemSlots = exports.getItemSubClass = exports.itemFilter = exports.armorFilter = void 0;

var _wowClassicItems = _interopRequireDefault(require("wow-classic-items"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const item = new _wowClassicItems.default.Items(); // items

const armorFilter = item.filter(i => i.requiredLevel === 60 && i.itemLevel >= 66 && i.itemLevel <= 88 && i.quality === 'Epic' && i.class === 'Armor').sort((a, b) => {
  return a.itemLevel - b.itemLevel;
});
exports.armorFilter = armorFilter;
const itemFilter = item.filter(i => i.requiredLevel === 60 && i.itemLevel >= 66 && i.itemLevel <= 88 && i.quality === 'Epic');
exports.itemFilter = itemFilter;

const getItemSubClass = (filter, subClass) => {
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
  const armorSlot = subClass.charAt(0).toUpperCase() + subClass.slice(1);
  console.log(armorSlot);
  const searchSubClass = items.filter(i => i.subclass === armorSlot);
  return searchSubClass;
};

exports.getItemSubClass = getItemSubClass;

const getItemSlots = (type, slot) => {
  return type.filter(i => i.slot === slot);
}; // export const plate = getItems(armorFilter).filter(i => i.subclass === 'Plate');
// plate slots
// export const plateHead = getItemSlots(plate, 'Head')
// export const plateShoulders = plate.filter(i => i.slot === 'Shoulders');
// export const plateChest = plate.filter(i => i.slot === 'Chest');
// export const plateWrist = plate.filter(i => i.slot === 'Wrist');
// export const plateHands = plate.filter(i => i.slot === 'Hands');
// export const plateWaist = plate.filter(i => i.slot === 'Waist');
// export const plateLegs = plate.filter(i => i.slot === 'Legs');
// export const plateFeet = plate.filter(i => i.slot === 'Feet');
// export const mail = getItems(armorFilter).filter(i => i.subclass === 'Mail');
// export const cloth = getItems(armorFilter).filter(i => i.subclass === 'Cloth');
// export const leather = getItems(armorFilter).filter(i => i.subclass === 'Leather')
// export const head = getItems(armorFilter).filter(i => i.slot === 'Head')


exports.getItemSlots = getItemSlots;