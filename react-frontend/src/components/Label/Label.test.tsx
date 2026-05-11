import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Label } from "./Label";

describe("Label Component", () => {
    it("renders children correctly", () => {
        render(<Label>Test Label</Label>);
        expect(screen.getByText("Test Label")).toBeDefined();
    });
    it("renders nothing when children is undefined", () => {
        render(<Label />);
        expect(screen.queryByText("Test Label")).toBeNull();
    });
});
