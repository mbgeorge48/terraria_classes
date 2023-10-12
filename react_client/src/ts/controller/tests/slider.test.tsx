import { fireEvent, screen } from "@testing-library/react";
import { Slider } from "../slider";
import { render } from "../../__helpers__/render";

it("should render the game stage slider", () => {
    render(
        <Slider
            min={0}
            max={1}
            labelText="Slider Label"
            onGameStageChange={jest.fn()}
        />
    );

    const slider = screen.getByRole("slider");
    expect(slider).not.toBeNull();
    expect(screen.getByText("Slider Label")).not.toBeNull();
});

it("should call the game stage change function when the slider is updated", () => {
    const onGameStageChange = jest.fn();

    render(
        <Slider
            min={0}
            max={6}
            labelText=""
            onGameStageChange={onGameStageChange}
        />
    );

    fireEvent.change(screen.getByRole("slider"), { target: { value: "2" } });
    expect(onGameStageChange).toHaveBeenCalledTimes(1);
    expect(onGameStageChange).toHaveBeenCalledWith(2);
});
