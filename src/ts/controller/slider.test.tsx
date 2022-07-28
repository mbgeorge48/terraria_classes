import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Slider from "./slider";

it("should render the game stage slider", () => {
  const selectedRole = "test";

  render(
    <Slider
      min={0}
      max={1}
      labelText="Slider Label"
      rangeColour={`accent-${selectedRole}`}
      onGameStageChange={jest.fn()}
    />
  );

  const slider = screen.getByRole("slider");
  expect(slider).not.toBeNull();
  expect(screen.getByText("Slider Label")).not.toBeNull();
  expect(slider.classList.contains("accent-test")).toBe(true);
});

it("should call the game stage change function when the slider is updated", () => {
  const onGameStageChange = jest.fn();

  render(
    <Slider
      min={0}
      max={6}
      labelText=""
      rangeColour=""
      onGameStageChange={onGameStageChange}
    />
  );

  fireEvent.change(screen.getByRole("slider"), { target: { value: "2" } });
  expect(onGameStageChange).toHaveBeenCalledTimes(1);
  expect(onGameStageChange).toHaveBeenCalledWith(2);
});
