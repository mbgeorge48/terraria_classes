import { screen } from "@testing-library/react";

import { ClassButton } from "../class-button";
import { render } from "../../__helpers__/render";

it("should render a class button - melee", () => {
    render(<ClassButton title="melee" />);
    const button = screen.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-melee")).toBe(true);
});

it("should render a class button - ranged", () => {
    render(<ClassButton title="ranged" />);

    const button = screen.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-ranged")).toBe(true);
});

it("should render a class button - magic", () => {
    render(<ClassButton title="magic" />);

    const button = screen.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-magic")).toBe(true);
});

it("should render a class button - summoner", () => {
    render(<ClassButton title="summoner" />);

    const button = screen.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-summoner")).toBe(true);
});

it("should render a summoner class button when melee is selected", () => {
    render(<ClassButton title="summoner" />);

    const button = screen.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-summoner")).toBe(true);
});
