import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Slider } from "./Slider";
import { fillStyles, thumbStyles, trackStyles } from "./styles";

vi.mock("./styles", () => ({
    trackStyles: vi.fn(),
    fillStyles: vi.fn(),
    thumbStyles: vi.fn(),
}));

describe("Slider Component", () => {
    it("renders heading and children correctly", () => {
        render(
            <Slider label="Slider Label" thumbLabels={["1", "2", "3", "4"]} />,
        );
        expect(screen.getByText("Slider Label")).toBeInTheDocument();
        expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("calls onChange when slider value changes", () => {
        const onChange = vi.fn();

        render(
            <Slider
                label="Slider Label"
                thumbLabels={["1", "2", "3"]}
                onChange={onChange}
                minValue={0}
                maxValue={3}
            />,
        );

        const sliderInput = screen.getByRole("slider");
        fireEvent.change(sliderInput, { target: { value: "2" } });

        expect(onChange).toHaveBeenCalledWith([2]);
    });
});

describe("Slider Component - Styles", () => {
    it("updates classes correctly when selectedRole and isDisabled changes", () => {
        const { rerender } = render(
            <Slider
                label="Slider Label"
                thumbLabels={["1", "2", "3", "4"]}
                selectedRole="melee"
                isDisabled
            />,
        );

        expect(trackStyles).toHaveBeenCalledWith({
            selectedRole: "melee",
            isDisabled: true,
        });

        rerender(
            <Slider
                label="Slider Label"
                thumbLabels={["1", "2", "3", "4"]}
                selectedRole="summoning"
            />,
        );

        expect(trackStyles).toHaveBeenCalledWith({
            selectedRole: "summoning",
            isDisabled: false,
        });
        expect(fillStyles).toHaveBeenCalledWith({
            selectedRole: "summoning",
            isDisabled: false,
        });
        expect(thumbStyles).toHaveBeenCalledWith({
            selectedRole: "summoning",
            isDisabled: false,
        });
    });
});
