import classNames from "classnames";
import React from "react";
import { decorationColour } from "../constants";
import { item, Role } from "../types";

interface Props {
  item: item;
  selectedRole: Role;
}

const Item: React.FC<Props> = ({ item, selectedRole }) => {
  return (
    <a
      className={classNames(
        "flex flex-row space-x-4 w-fit place-items-center decoration-4 underline-offset-8 hover:underline",
        selectedRole ? decorationColour[selectedRole] : undefined
      )}
      href={item.url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={item.imgPath}
        alt={item.name}
        className="w-10 h-10 aspect-square"
      />
      <p className="text-lg">{item.name}</p>
    </a>
  );
};

export default Item;
