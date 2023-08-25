import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import ClassButton from "../class-button";

it("should render a class button - melee", () => {
    render(<ClassButton title="melee" />);
    const button = screen.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-melee")).toBe(true);
    expect(button.classList.contains("bg-melee")).toBe(true);
});

it("should render a class button - ranged", () => {
    render(<ClassButton title="ranged" />);

    const button = screen.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-ranged")).toBe(true);
    expect(button.classList.contains("bg-ranged")).toBe(true);
});

it("should render a class button - magic", () => {
    render(<ClassButton title="magic" />);

    const button = screen.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-magic")).toBe(true);
    expect(button.classList.contains("bg-magic")).toBe(true);
});

it("should render a class button - summoner", () => {
    render(<ClassButton title="summoner" />);

    const button = screen.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-summoner")).toBe(true);
    expect(button.classList.contains("bg-summoner")).toBe(true);
});

it("should render a summoner class button when melee is selected", () => {
    render(<ClassButton title="summoner" />);

    const button = screen.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-summoner")).toBe(true);
    expect(button.classList.contains("bg-summoner")).toBe(false);
});

it("should call the role change function when the button is pressed", () => {
    const onRoleChange = jest.fn();
    const title = "summoner";

    render(<ClassButton title={title} />);

    fireEvent.click(screen.getByRole("button"));
    expect(onRoleChange).toHaveBeenCalledTimes(1);
    expect(onRoleChange).toHaveBeenCalledWith(title);
});
