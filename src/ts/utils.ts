import { item, items } from "./types";

export function processData(filteredData: items) {
  let weaponsList: item[] = [];
  let armorList: item[] = [];
  let accessoriesList: item[] = [];
  let buffsList: item[] = [];
  let mountsList: item[] = [];
  let lightsList: item[] = [];

  filteredData.forEach((item) => {
    switch (item.category) {
      case "weapons":
        weaponsList.push(item);
        break;
      case "armor":
        armorList.push(item);
        break;
      case "accessories":
        accessoriesList.push(item);
        break;
      case "buffs":
        buffsList.push(item);
        break;
      case "mounts":
        mountsList.push(item);
        break;
      case "lights":
        lightsList.push(item);
        break;
    }
  });

  return {
    weaponsList,
    armorList,
    accessoriesList,
    buffsList,
    mountsList,
    lightsList,
  };
}
