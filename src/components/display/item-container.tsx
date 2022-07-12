import React from "react";
import { ItemCategory, items, Role } from "../types";

interface Props {
  selectedRole: Role;
  itemCategory: ItemCategory;
  data?: items;
}

const ItemContainer: React.FC<Props> = ({ selectedRole, itemCategory }) => {
  if (!selectedRole) {
    return null;
  }

  return (
    <div
      className={`rounded-xl border-4 bg-gray-800 p-2  text-white border-${
        selectedRole ? selectedRole : undefined
      }`}
    >
      <h1 className="capitalize text-2xl">{itemCategory}</h1>
      <div className="grid grid-cols-3 gap-y-4"></div>
    </div>
  );
};

export default ItemContainer;
