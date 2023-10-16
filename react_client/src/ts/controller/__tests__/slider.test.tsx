import { Slider } from "../slider";
import { render } from "../../__helpers__/render";

it("should render the game stage slider", () => {
    const subject = render(<Slider min={0} max={1} labelText="Slider Label" />);

    const slider = subject.getByRole("slider");
    expect(slider).not.toBeNull();
    expect(subject.getByText("Slider Label")).not.toBeNull();
});
