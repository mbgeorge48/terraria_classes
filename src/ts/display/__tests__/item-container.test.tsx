import { render, screen } from "@testing-library/react";

import React from "react";
import { items } from "../../types";

import ItemContainer from "../item-container";

const data: items = [
  {
    name: "Pointy Stick",
    role: "melee",
    url: "https://terraria.gamepedia.com/fake_url",
    imgPath: "https://terraria.gamepedia.com/fake_picture.png",
    category: "weapons",
    gameStageAvailable: 0,
  },
];

it("should render nothing when there is no selected role", () => {
  const { container } = render(
    <ItemContainer selectedRole={undefined} itemCategory={"weapons"} />
  );

  expect(container.childElementCount).toEqual(0);
});

it("should render an item container when there is a selected role", () => {
  const { container } = render(
    <ItemContainer
      selectedRole={"melee"}
      itemCategory={"weapons"}
      data={data}
    />
  );
  expect(container).not.toBeNull();
  expect(screen.getByText("weapons")).not.toBeNull();
  expect(screen.getByText(data[0].name)).not.toBeNull();

  expect(screen.getByRole("img")).not.toBeNull();
  expect(screen.getByRole("link")).not.toBeNull();
});

// TODO Test the right items are listed depending on game stage and slected role
// TODO Make the contianers flow better
// TODO Add colours for the new classes
