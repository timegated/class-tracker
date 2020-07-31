
import { makeSearchWork, mapItems, armorFilter, weaponFilter, itemFilter } from '../../utils/itemDButils';



// find items by subclass
export const searchItems = itemClass => {
  const items = mapItems(armorFilter);
  const searchTerm = makeSearchWork(itemClass);
  const searchSubClass = items.filter(i => i.subclass === searchTerm);
  return searchSubClass;
};

// find items by subclass and slot
export const searchItemSlots = (subClass, slot) => {
  const items = mapItems(armorFilter);
  const sC = makeSearchWork(subClass);
  const s = makeSearchWork(slot);
  console.log('From getItemSlots: ', sC);
  console.log('From getItemSlots: ', s);
  const searchSlots = items.filter(i => i.subclass === sC && i.slot === s);
  console.log(searchSlots)
  return searchSlots
};

export const searchWeapons = (weapons) => {
  const items = mapItems(weaponFilter);
  const subClass = makeSearchWork(weapons);
  const weaponTypes = items.filter(i => i.subclass === subClass);
  return weaponTypes;
};