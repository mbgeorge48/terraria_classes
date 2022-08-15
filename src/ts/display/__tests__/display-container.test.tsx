import { render } from "@testing-library/react";

import React from "react";
import DisplayContainer from "../display-container";

it("should the display container", () => {
  const { container } = render(
    <DisplayContainer selectedRole={"melee"} selectedGameStage={0} />
  );

  expect(container.childElementCount).toEqual(0);
});
