import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import ClassButton from "../class-button";

it("should render a class button - melee", () => {
  render(
    <ClassButton
      onRoleChange={jest.fn()}
      title="melee"
      baseClasses="border-melee hover:bg-melee"
      selectedRole="melee"
      selectedClasses="bg-melee text-white"
    />
  );
  const button = screen.getByRole("button");
  expect(button).not.toBeNull();

  expect(button.classList.contains("border-melee")).toBe(true);
  expect(button.classList.contains("bg-melee")).toBe(true);
});

it("should render a class button - ranged", () => {
  render(
    <ClassButton
      onRoleChange={jest.fn()}
      title="ranged"
      baseClasses="border-ranged hover:bg-ranged"
      selectedRole="ranged"
      selectedClasses="bg-ranged text-white"
    />
  );

  const button = screen.getByRole("button");
  expect(button).not.toBeNull();

  expect(button.classList.contains("border-ranged")).toBe(true);
  expect(button.classList.contains("bg-ranged")).toBe(true);
});

it("should render a class button - magic", () => {
  render(
    <ClassButton
      onRoleChange={jest.fn()}
      title="magic"
      baseClasses="border-magic hover:bg-magic"
      selectedRole="magic"
      selectedClasses="bg-magic text-white"
    />
  );

  const button = screen.getByRole("button");
  expect(button).not.toBeNull();

  expect(button.classList.contains("border-magic")).toBe(true);
  expect(button.classList.contains("bg-magic")).toBe(true);
});

it("should render a class button - summoner", () => {
  render(
    <ClassButton
      onRoleChange={jest.fn()}
      title="summoner"
      baseClasses="border-summoner hover:bg-summoner"
      selectedRole="summoner"
      selectedClasses="bg-summoner text-white"
    />
  );

  const button = screen.getByRole("button");
  expect(button).not.toBeNull();

  expect(button.classList.contains("border-summoner")).toBe(true);
  expect(button.classList.contains("bg-summoner")).toBe(true);
});

it("should render a summoner class button when melee is selected", () => {
  render(
    <ClassButton
      onRoleChange={jest.fn()}
      title="summoner"
      baseClasses="border-summoner hover:bg-summoner"
      selectedRole="melee"
      selectedClasses="bg-summoner text-white"
    />
  );

  const button = screen.getByRole("button");
  expect(button).not.toBeNull();

  expect(button.classList.contains("border-summoner")).toBe(true);
  expect(button.classList.contains("bg-summoner")).toBe(false);
});

it("should call the role change function when the button is pressed", () => {
  const onRoleChange = jest.fn();
  const title = "summoner";

  render(
    <ClassButton
      onRoleChange={onRoleChange}
      title={title}
      baseClasses=""
      selectedRole="magic"
      selectedClasses=""
    />
  );

  fireEvent.click(screen.getByRole("button"));
  expect(onRoleChange).toHaveBeenCalledTimes(1);
  expect(onRoleChange).toHaveBeenCalledWith(title);
});
