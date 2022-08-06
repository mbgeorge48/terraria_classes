import { v4 as uuidv4 } from "uuid";

import classNames from "classnames";
import React from "react";
import { bgColour } from "../constants";
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
    <div
      className={`rounded-xl border-4 bg-gray-800 text-white py-2 mb-auto w-72 border-${
        selectedRole ? selectedRole : undefined
      }`}
    >
      <h1
        className={classNames(
          "mb-4 text-2xl capitalize p-2",
          selectedRole ? bgColour[selectedRole] : undefined
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
  );
};

export default ItemContainer;
