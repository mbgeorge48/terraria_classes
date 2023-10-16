import { ClassButton } from "../class-button";
import { render } from "../../__helpers__/render";

it("should render a class button - melee", () => {
    const subject = render(<ClassButton title="melee" />);
    const button = subject.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-melee")).toBe(true);
});

it("should render a class button - ranged", () => {
    const subject = render(<ClassButton title="ranged" />);

    const button = subject.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-ranged")).toBe(true);
});

it("should render a class button - magic", () => {
    const subject = render(<ClassButton title="magic" />);

    const button = subject.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-magic")).toBe(true);
});

it("should render a class button - summoner", () => {
    const subject = render(<ClassButton title="summoner" />);

    const button = subject.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-summoner")).toBe(true);
});

it("should render a summoner class button when melee is selected", () => {
    const subject = render(<ClassButton title="summoner" />);

    const button = subject.getByRole("button");
    expect(button).not.toBeNull();

    expect(button.classList.contains("border-summoner")).toBe(true);
});
