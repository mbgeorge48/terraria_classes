import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import ClassButton from "./class-button";

it("should render a class button - melee", () => {
  const { container } = render(
    <ClassButton
      onRoleChange={jest.fn()}
      title="melee"
      baseClasses="border-melee hover:bg-melee"
      selectedRole="melee"
      selectedClasses="bg-melee text-white"
    />
  );

  expect(screen.getByRole("button")).not.toBeNull();

  expect(container.getElementsByClassName("border-melee").length).toBe(1);
  expect(container.getElementsByClassName("bg-melee").length).toBe(1);
});

it("should render a class button - ranged", () => {
  const { container } = render(
    <ClassButton
      onRoleChange={jest.fn()}
      title="ranged"
      baseClasses="border-ranged hover:bg-ranged"
      selectedRole="ranged"
      selectedClasses="bg-ranged text-white"
    />
  );

  expect(screen.getByRole("button")).not.toBeNull();

  expect(container.getElementsByClassName("border-ranged").length).toBe(1);
  expect(container.getElementsByClassName("bg-ranged").length).toBe(1);
});

it("should render a class button - magic", () => {
  const { container } = render(
    <ClassButton
      onRoleChange={jest.fn()}
      title="magic"
      baseClasses="border-magic hover:bg-magic"
      selectedRole="magic"
      selectedClasses="bg-magic text-white"
    />
  );

  expect(screen.getByRole("button")).not.toBeNull();

  expect(container.getElementsByClassName("border-magic").length).toBe(1);
  expect(container.getElementsByClassName("bg-magic").length).toBe(1);
});

it("should render a class button - summoner", () => {
  const { container } = render(
    <ClassButton
      onRoleChange={jest.fn()}
      title="summoner"
      baseClasses="border-summoner hover:bg-summoner"
      selectedRole="summoner"
      selectedClasses="bg-summoner text-white"
    />
  );

  expect(screen.getByRole("button")).not.toBeNull();

  expect(container.getElementsByClassName("border-summoner").length).toBe(1);
  expect(container.getElementsByClassName("bg-summoner").length).toBe(1);
});

it("should render a summoner class button when melee is selected", () => {
  const { container } = render(
    <ClassButton
      onRoleChange={jest.fn()}
      title="summoner"
      baseClasses="border-summoner hover:bg-summoner"
      selectedRole="melee"
      selectedClasses="bg-summoner text-white"
    />
  );

  expect(screen.getByRole("button")).not.toBeNull();

  expect(container.getElementsByClassName("border-summoner").length).toBe(1);
  expect(container.getElementsByClassName("bg-summoner").length).toBe(0);
});

it("should call the role change function when the button is pressed", () => {
  const onRoleChange = jest.fn();

  render(
    <ClassButton
      onRoleChange={onRoleChange}
      title="summoner"
      baseClasses=""
      selectedRole="magic"
      selectedClasses=""
    />
  );

  fireEvent.click(screen.getByRole("button"));
  expect(onRoleChange).toHaveBeenCalledTimes(1);
});
