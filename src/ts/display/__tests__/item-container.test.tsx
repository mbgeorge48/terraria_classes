import { render, screen } from "@testing-library/react";

import React from "react";
import { fakeData } from "../../__tests__/utils.test";

import ItemContainer from "../item-container";

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
      data={fakeData}
    />
  );
  expect(container).not.toBeNull();
  expect(screen.getByText("weapons")).not.toBeNull();
  expect(screen.getByText(fakeData[0].name)).not.toBeNull();
  expect(screen.getAllByRole("img")).toHaveLength(fakeData.length);
  expect(screen.getAllByRole("link")).toHaveLength(fakeData.length);
});
