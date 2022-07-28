import { render, screen } from "@testing-library/react";
import React from "react";
import ControllerContainer from "./controller-container";

it("should render a container", () => {
  render(
    <ControllerContainer onRoleChange={jest.fn()} selectedRole={"melee"} />
  );

  expect(screen.getAllByRole("button")).toHaveLength(4);
  expect(screen.getByText("melee")).not.toBeNull();
  expect(screen.getByText("ranged")).not.toBeNull();
  expect(screen.getByText("magic")).not.toBeNull();
  expect(screen.getByText("summoner")).not.toBeNull();
});
