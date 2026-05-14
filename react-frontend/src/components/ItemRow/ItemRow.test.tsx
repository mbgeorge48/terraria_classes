import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import type { Item } from "../../types";
import { ItemRow } from "./ItemRow";
import { styles } from "./styles";

vi.mock("./styles", () => ({
    styles: vi.fn(),
}));

const mockItem: Item = {
    category: "single-target weapons",
    gameStageAvailable: 4,
    imgPath: "https://terraria.wiki.gg/images/a/ad/Flamethrower.png",
    name: "Flamethrower",
    role: "ranged",
    url: "https://terraria.wiki.gg/wiki/Flamethrower",
};

describe("ItemRow Component", () => {
    it("renders heading and children correctly", () => {
        render(<ItemRow item={mockItem} />);
        expect(screen.getByRole("link", { name: "Flamethrower" })).toBeInTheDocument();
        expect(screen.getByAltText("Flamethrower")).toBeInTheDocument();
    });
});

describe("ItemRow Component - Styles", () => {
    it("updates classes correctly when selectedRole changes", () => {
        const { rerender } = render(
            <ItemRow item={mockItem} selectedRole="melee" />,
        );

        expect(styles).toHaveBeenCalledWith({
            selectedRole: "melee",
        });

        rerender(<ItemRow item={mockItem} selectedRole="magic" />);

        expect(styles).toHaveBeenCalledWith({
            selectedRole: "magic",
        });
    });
});
