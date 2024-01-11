import { render } from "@testing-library/react";
import { Body } from "../body";

it("should render a body container", () => {
    const subject = render(<Body />);

    expect(subject.getAllByRole("button")).toHaveLength(4);
    expect(subject.getAllByRole("slider")).toHaveLength(1);

    expect(subject.getByText("terraria")).not.toBeNull();
    expect(subject.getByText("classes")).not.toBeNull();
    expect(subject.getByText("guide")).not.toBeNull();

    expect(subject.getByText("melee")).not.toBeNull();
    expect(subject.getByText("ranged")).not.toBeNull();
    expect(subject.getByText("magic")).not.toBeNull();
    expect(subject.getByText("summoner")).not.toBeNull();

    expect(subject.getByText("Pre-bosses")).not.toBeNull();
});
