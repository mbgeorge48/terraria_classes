import React from "react";
import { items, Role } from "../types";
import ItemContainer from "./item-container";

interface Props {
  selectedRole: Role;
  selectedGameStage: number;
}


function processData(selectedRole: Role, selectedGameStage:number, allItemData:items) {
  let weaponsList = [];
  let armorList = [];
  let accessoriesList = [];
  let buffsList = [];
  let mountsList = [];
  let lightsList = [];

  for (var i = 0; i < allItemData.length; i++) {
    const item = allItemData[i];
    if ((item.role === selectedRole || item.role === "mixed") && item.gameStageAvailable ===selectedGameStage) {
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
  selectedGameStage,
}) => {

  const allItemData: items = require("../../data/all-items.json");

  if (!allItemData){
    return <span>Failed to load input data</span>
  }
  
  const data = processData(selectedRole, selectedGameStage, allItemData);

  return (
    <div className="m-6">
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-evenly"> */}
      <div className="flex flex-wrap content-start gap-4 space-x-4 justify-evenly">
        {data.weaponsList.length > 0 ? <ItemContainer
          selectedRole={selectedRole}
          itemCategory="weapons"
          data={data.weaponsList}
        /> : undefined}
        {data.armorList.length > 0 ? <ItemContainer
          selectedRole={selectedRole}
          itemCategory="armor"
          data={data.armorList}
        /> : undefined}
        {data.accessoriesList.length > 0 ? <ItemContainer
          selectedRole={selectedRole}
          itemCategory="accessories"
          data={data.accessoriesList}
        /> : undefined}
        {data.buffsList.length > 0 ? <ItemContainer
          selectedRole={selectedRole}
          itemCategory="buffs/potions"
          data={data.buffsList}
        /> : undefined}
        {data.mountsList.length > 0 ? <ItemContainer
          selectedRole={selectedRole}
          itemCategory="mounts"
          data={data.mountsList}
        /> : undefined}
        {data.lightsList.length > 0 ? <ItemContainer
          selectedRole={selectedRole}
          itemCategory="lights"
          data={data.lightsList}
        /> : undefined}
      </div>
    </div>
  );
};

export default DisplayContainer;
