import React from "react";
import useSWR from "swr";
// import { useAPI } from "../api";
import { items, Role } from "../types";
import ItemContainer from "./item-container";

interface Props {
  selectedRole: Role;
  selectedGameStage: number;
}

// export const allItemData: items = require("../../data/all-items.json");

function processData(filteredData: items) {
  let weaponsList = [];
  let armorList = [];
  let accessoriesList = [];
  let buffsList = [];
  let mountsList = [];
  let lightsList = [];
  // console.table(filteredData);

  console.log(filteredData);
  console.table(filteredData);

  for (var i = 0; i < filteredData.length; i++) {
    const item = filteredData[i];
    console.log(item);

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
  return {
    weaponsList,
    armorList,
    accessoriesList,
    buffsList,
    mountsList,
    lightsList,
  };
}

const fetcher = (url: string) => fetch(url).then((response) => response.json());

const DisplayContainer: React.FC<Props> = ({
  selectedRole,
  selectedGameStage,
}) => {
  const { data, error } = useSWR(
    `http://127.0.0.1:5000/api/${selectedRole}/${selectedGameStage}/`,
    fetcher
  );

  if (error) {
    return <p>Failed to data form.</p>;
  }

  if (!data) {
    return null;
  }
  const processedData = processData(data);
  // console.table(processedData);

  return (
    <div className="m-4">
      <div className="lg:flex lg:flex-wrap lg:justify-around gap-4 grid grid-cols-1">
        <ItemContainer
          selectedRole={selectedRole}
          itemCategory="weapons"
          data={processedData.weaponsList}
        />
        <ItemContainer
          selectedRole={selectedRole}
          itemCategory="armor"
          data={processedData.armorList}
        />
        <ItemContainer
          selectedRole={selectedRole}
          itemCategory="accessories"
          data={processedData.accessoriesList}
        />
        <ItemContainer
          selectedRole={selectedRole}
          itemCategory="buffs/potions"
          data={processedData.buffsList}
        />
        <ItemContainer
          selectedRole={selectedRole}
          itemCategory="mounts"
          data={processedData.mountsList}
        />
        <ItemContainer
          selectedRole={selectedRole}
          itemCategory="lights"
          data={processedData.lightsList}
        />
      </div>
    </div>
  );
};

export default DisplayContainer;
