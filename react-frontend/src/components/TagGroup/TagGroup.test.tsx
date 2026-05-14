import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Tag } from "./Tag";
import { TagGroup } from "./TagGroup";

// TagList and Tag cannot be tested in isolation since they rely on context from TagGroup, so we will test them together in this file.

describe("TagGroup Component", () => {
    it("renders label correctly", () => {
        render(
            <TagGroup label="Select Role">
                <Tag id="melee">Melee</Tag>
            </TagGroup>,
        );
        expect(screen.getByText("Select Role")).toBeInTheDocument();
    });

    it("renders children tags correctly", () => {
        render(
            <TagGroup label="Select Role">
                <Tag id="melee">Melee</Tag>
                <Tag id="ranged">Ranged</Tag>
                <Tag id="magic">Magic</Tag>
            </TagGroup>,
        );
        expect(screen.getByRole("gridcell", { name: "Melee" })).toBeInTheDocument();
        expect(screen.getByRole("gridcell", { name: "Ranged" })).toBeInTheDocument();
        expect(screen.getByRole("gridcell", { name: "Magic" })).toBeInTheDocument();
    });

    it("calls onSelectionChange when a tag is clicked", () => {
        const onSelectionChange = vi.fn();

        render(
            <TagGroup
                label="Select a class"
                onSelectionChange={onSelectionChange}
                selectionBehavior="toggle"
            >
                <Tag id="melee">Melee</Tag>
                <Tag id="ranged">Ranged</Tag>
            </TagGroup>,
        );

        const meleeTag = screen.getByRole("gridcell", { name: "Melee" });
        fireEvent.click(meleeTag);

        expect(onSelectionChange).toHaveBeenCalledWith(expect.any(Set));
        expect(Array.from(onSelectionChange.mock.calls[0][0])).toEqual([
            "melee",
        ]);
    });
});
