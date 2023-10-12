import { render, screen } from "@testing-library/react";
import { Body } from "./body";

it("should render a body container", () => {
    render(<Body />);

    expect(screen.getAllByRole("button")).toHaveLength(4);
    expect(screen.getAllByRole("slider")).toHaveLength(1);

    expect(screen.getByText("terraria")).not.toBeNull();
    expect(screen.getByText("classes")).not.toBeNull();
    expect(screen.getByText("guide")).not.toBeNull();

    expect(screen.getByText("melee")).not.toBeNull();
    expect(screen.getByText("ranged")).not.toBeNull();
    expect(screen.getByText("magic")).not.toBeNull();
    expect(screen.getByText("summoner")).not.toBeNull();

    expect(screen.getByText("Pre-bosses")).not.toBeNull();
});
