import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import React from "react";

import { roleClasses } from "../constants";
import { ItemCategory, items, Role } from "../types";
import Item from "./item";

interface Props {
  selectedRole: Role;
  itemCategory: ItemCategory;
  data?: items;
}

const ItemContainer: React.FC<Props> = ({
  selectedRole,
  itemCategory,
  data,
}) => {
  if (!selectedRole || (data && data.length < 1)) {
    return null;
  }

  return (
    <div className="relative w-3/4 mx-auto mb-auto lg:w-auto group md:w-2/3">
      <div
        className={classNames(
          "absolute -inset-0 blur-sm transition-all ease-in-out delay-150 duration-300 group-hover:blur-md group-hover:-inset-1 group-active:blur-md group-active:-inset-1",
          selectedRole ? roleClasses[selectedRole].bg : undefined
        )}
      ></div>
      <div
        className={classNames(
          "relative rounded-xl border-4 bg-white text-gray-600 py-2 drop-shadow-md",
          selectedRole ? roleClasses[selectedRole].border : undefined
        )}
      >
        <h1
          className={classNames(
            "mb-4 text-2xl capitalize p-2 text-white group-hover:drop-shadow-xl",
            selectedRole ? roleClasses[selectedRole].bg : undefined
          )}
        >
          {itemCategory}
        </h1>
        <div className="flex flex-col px-2 space-y-2">
          {data?.map((item) => (
            <Item item={item} key={uuidv4()} selectedRole={selectedRole} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemContainer;