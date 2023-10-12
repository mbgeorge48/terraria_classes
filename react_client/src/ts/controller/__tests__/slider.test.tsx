import { screen } from "@testing-library/react";
import { Slider } from "../slider";
import { render } from "../../__helpers__/render";

it("should render the game stage slider", () => {
    render(<Slider min={0} max={1} labelText="Slider Label" />);

    const slider = screen.getByRole("slider");
    expect(slider).not.toBeNull();
    expect(screen.getByText("Slider Label")).not.toBeNull();
});
