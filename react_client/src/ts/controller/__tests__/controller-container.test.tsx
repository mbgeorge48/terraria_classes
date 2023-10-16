import { ControllerContainer } from "../controller-container";
import { render } from "../../__helpers__/render";

it("should render a container", () => {
    const subject = render(<ControllerContainer displayExtraClasses={false} />);

    expect(subject.getAllByRole("button")).toHaveLength(4);
    expect(subject.getByText("melee")).not.toBeNull();
    expect(subject.getByText("ranged")).not.toBeNull();
    expect(subject.getByText("magic")).not.toBeNull();
    expect(subject.getByText("summoner")).not.toBeNull();
});

it("should render a container - extra classes", () => {
    const subject = render(<ControllerContainer displayExtraClasses={true} />);

    expect(subject.getAllByRole("button")).toHaveLength(7);
    expect(subject.getByText("melee")).not.toBeNull();
    expect(subject.getByText("ranged")).not.toBeNull();
    expect(subject.getByText("magic")).not.toBeNull();
    expect(subject.getByText("summoner")).not.toBeNull();
    expect(subject.getByText("mixed")).not.toBeNull();
    expect(subject.getByText("tank")).not.toBeNull();
    expect(subject.getByText("healer")).not.toBeNull();
});
