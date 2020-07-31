import Database from 'wow-classic-items';

const item = new Database.Items();

// items
export const armorFilter = item.filter(i => i.requiredLevel === 60 && i.itemLevel >= 66 && i.itemLevel <= 88 && i.quality === 'Epic' && i.class === 'Armor').sort((a, b) => {
  return a.itemLevel - b.itemLevel
});

export const itemFilter = item.filter(i => i.requiredLevel === 60 && i.itemLevel >= 66 && i.itemLevel <= 88 && i.quality === 'Epic')


export const getItemSubClass = (filter, subClass) => {
  const items = filter.map(filterItem => {
    return {
      name: filterItem.name,
      itemLevel: filterItem.itemLevel,
      requiredLevel: filterItem.requiredLevel,
      class: filterItem.class,
      subclass: filterItem.subclass,
      slot: filterItem.slot,
      icon: filterItem.icon
    }
  });
  const armorSlot = subClass.charAt(0).toUpperCase() + subClass.slice(1);
  console.log(armorSlot)
  const searchSubClass = items.filter(i => i.subclass === armorSlot);

  return searchSubClass;
};

export const getItemSlots = (type, slot) => {
  return type.filter(i => i.slot === slot)
};


// export const plate = getItems(armorFilter).filter(i => i.subclass === 'Plate');
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
