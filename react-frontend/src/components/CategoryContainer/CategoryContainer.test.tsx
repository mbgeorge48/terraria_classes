import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { CategoryContainer } from "./CategoryContainer";
import {
    containerBackgroundStyle,
    containerStyle,
    headingStyle,
} from "./styles";

vi.mock("./styles", () => ({
    containerBackgroundStyle: vi.fn(),
    containerStyle: vi.fn(),
    headingStyle: vi.fn(),
}));

describe("CategoryContainer Component", () => {
    it("renders heading and children correctly", () => {
        render(
            <CategoryContainer heading="Example Heading">
                Example Body
            </CategoryContainer>,
        );
        expect(screen.getByText("Example Heading")).toBeInTheDocument();
        expect(screen.getByText("Example Body")).toBeInTheDocument();
    });
});

describe("CategoryContainer Component - Styles", () => {
    it("updates classes correctly when selectedRole changes", async () => {
        const { rerender } = render(
            <CategoryContainer heading="Test" selectedRole="melee">
                Content
            </CategoryContainer>,
        );

        expect(headingStyle).toHaveBeenCalledWith({
            selectedRole: "melee",
        });

        rerender(
            <CategoryContainer heading="Test" selectedRole="ranged">
                Content
            </CategoryContainer>,
        );

        expect(headingStyle).toHaveBeenCalledWith({
            selectedRole: "ranged",
        });
        expect(containerBackgroundStyle).toHaveBeenCalledWith({
            selectedRole: "ranged",
        });
        expect(containerStyle).toHaveBeenCalledWith({
            selectedRole: "ranged",
        });
    });
});
