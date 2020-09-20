import Database from 'wow-classic-items';

const item = new Database.Items();

export const mapItems = (filter) => {
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
  return items
};

export const makeSearchWork = (string) => {
  if (string === undefined) {
    return
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// item filters
// weapons
export const weaponFilter = item.filter(i => i.requiredLevel === 60 && i.itemLevel >= 66 && i.itemLevel <= 100 && i.quality === 'Epic' || i.class === 'Weapon').sort((a, b) => {
  return a.itemLevel - b.itemLevel;
});

// armor
export const armorFilter = item.filter(i => i.requiredLevel === 60 && i.itemLevel >= 66 && i.itemLevel <= 88 && i.quality === 'Epic' && i.class === 'Armor').sort((a, b) => {
  return a.itemLevel - b.itemLevel;
});

// general
export const itemFilter = item.filter(i => i.requiredLevel === 60 && i.itemLevel >= 66 && i.itemLevel <= 88 && i.quality === 'Epic');