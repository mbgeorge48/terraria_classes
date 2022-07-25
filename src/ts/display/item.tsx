import React from "react";
import { item } from "../types";

interface Props {
  item: item;
}

const Item: React.FC<Props> = ({ item }) => {
  return (
    <a
      className="flex flex-row space-x-4 w-fit place-items-center"
      href={item.url}
      target="_blank"
      rel="noreferrer"
    >
      <img src={item.imgPath} alt={item.name} className="w-10 h-10" />
      <p className="text-lg hover:underline">{item.name}</p>
    </a>
  );
};

export default Item;
