import React from "react";
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
  if (!selectedRole) {
    return null;
  }

  return (
    <div
      className={`rounded-xl border-4 bg-gray-800 text-white py-2 mb-auto border-${
        selectedRole ? selectedRole : undefined
      }`}
    >
      <h1 className={`mb-4 text-2xl capitalize p-2 bg-${selectedRole}`}>
        {itemCategory}
      </h1>
      <div className="flex flex-col space-y-2 px-2">
        {data?.map((item) => (
          <Item item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default ItemContainer;
