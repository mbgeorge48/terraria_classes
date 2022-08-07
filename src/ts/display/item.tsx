import classNames from "classnames";
import React from "react";

import { roleClasses } from "../constants";
import { item, Role } from "../types";

interface Props {
  item: item;
  selectedRole: Role;
}

const Item: React.FC<Props> = ({ item, selectedRole }) => {
  return (
    <a
      className={classNames(
        "flex flex-row space-x-4 w-fit place-items-center decoration-4 underline-offset-2 hover:underline",
        selectedRole ? roleClasses[selectedRole].decoration : undefined
      )}
      href={item.url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={item.imgPath}
        alt={item.name}
        className="w-10 h-10 object-contain"
        // TODO make the images less weird
      />
      <p className="text-lg">{item.name}</p>
    </a>
  );
};

export default Item;
