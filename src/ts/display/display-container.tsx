import classNames from "classnames";
import React from "react";
import useSWR from "swr";
import { roleClasses } from "../constants";
import { item, items, Role } from "../types";
import ItemContainer from "./item-container";

interface Props {
  selectedRole: Role;
  selectedGameStage: number;
}

function processData(filteredData: items) {
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

const fetcher = (url: string) => fetch(url).then((response) => response.json());

const DisplayContainer: React.FC<Props> = ({
  selectedRole,
  selectedGameStage,
}) => {
  const { data, error } = useSWR<items>(
    `http://127.0.0.1:5000/api/${selectedRole}/${selectedGameStage}/`,
    fetcher
  );

  if (error) {
    return (
      <div
        className={classNames(
          "rounded-lg m-4 border-2 border-black bg-opacity-30",
          selectedRole ? roleClasses[selectedRole].bg : "gray-400/70"
        )}
      >
        Something Went wrong!
      </div>
    );
  }

  if (!data) {
    return null;
  }
  const processedData = processData(data);

  return (
    <div className="m-4">
      <div className="grid grid-cols-1 gap-4 lg:flex lg:flex-wrap lg:justify-around">
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
          itemCategory="buffs"
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
