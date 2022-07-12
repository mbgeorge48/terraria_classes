import React from "react";
import { items, Role } from "../types";
import ItemContainer from "./item-container";

interface Props {
  selectedRole: Role;
  selectedGameStage: number;
}

export const allItemData: items = require("../../data/all-items.json");

function processData(selectedRole: Role) {
  let weaponsList = [];
  let armorList = [];
  let accessoriesList = [];
  let buffsList = [];
  let mountsList = [];
  let lightsList = [];

  for (var i = 0; i < allItemData.length; i++) {
    const item = allItemData[i];
    if (item.role === selectedRole || item.role === "mixed") {
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
        case "buffs/potions":
          buffsList.push(item);
          break;
        case "mounts":
          mountsList.push(item);
          break;
        case "lights":
          lightsList.push(item);
          break;
      }
    }
  }
  return {
    weaponsList,
    armorList,
    accessoriesList,
    buffsList,
    mountsList,
    lightsList,
  };
}

const DisplayContainer: React.FC<Props> = ({
  selectedRole,
  // selectedGameStage,
}) => {
  const data = processData(selectedRole);

  return (
    <div className="m-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-evenly">
        <ItemContainer
          selectedRole={selectedRole}
          itemCategory="weapons"
          data={data.weaponsList}
        />
        <ItemContainer
          selectedRole={selectedRole}
          itemCategory="armor"
          data={data.armorList}
        />
        <ItemContainer
          selectedRole={selectedRole}
          itemCategory="accessories"
          data={data.accessoriesList}
        />
        <ItemContainer
          selectedRole={selectedRole}
          itemCategory="buffs/potions"
          data={data.buffsList}
        />
        <ItemContainer
          selectedRole={selectedRole}
          itemCategory="mounts"
          data={data.mountsList}
        />
        <ItemContainer
          selectedRole={selectedRole}
          itemCategory="lights"
          data={data.lightsList}
        />
      </div>
    </div>
  );
};

export default DisplayContainer;
