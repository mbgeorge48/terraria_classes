import { render, screen } from "@testing-library/react";
import type { SWRResponse } from "swr";
import { describe, expect, it, vi } from "vitest";

import { useApi } from "../../api/useApi";
import { GameStageProvider } from "../../context/GameStageProvider";
import { RoleProvider } from "../../context/RoleProvider";
import type { Item, Role } from "../../types";
import { ItemWrapper } from "./ItemWrapper";

vi.mock("../../api/useApi");

const mockItems: Item[] = [
    {
        name: "Volcano",
        url: "https://terraria.wiki.gg/wiki/Volcano",
        imgPath: "https://terraria.wiki.gg/images/c/cf/Volcano.png",
        role: "melee",
        category: "single-target weapons",
        gameStageAvailable: 1,
    },
    {
        name: "Hive-Five",
        url: "https://terraria.wiki.gg/wiki/Hive-Five",
        imgPath: "https://terraria.wiki.gg/images/0/0e/Hive-Five.png",
        role: "melee",
        category: "crowd-control weapons",
        gameStageAvailable: 1,
    },
];

describe("ItemWrapper", () => {
    const mockSetSelectedRole = vi.fn();
    const mockSetSelectedGameStage = vi.fn();

    const renderWithProviders = (selectedRole = "melee" as Role) => {
        return render(
            <RoleProvider
                selectedRole={selectedRole}
                setSelectedRole={mockSetSelectedRole}
            >
                <GameStageProvider
                    selectedGameStage={0}
                    setSelectedGameStage={mockSetSelectedGameStage}
                >
                    <ItemWrapper />
                </GameStageProvider>
            </RoleProvider>,
        );
    };

    it("renders loading state", () => {
        vi.mocked(useApi).mockReturnValue({
            data: undefined,
            isLoading: true,
            error: undefined,
        } as SWRResponse);

        renderWithProviders();
        expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    });

    it("renders error state", () => {
        vi.mocked(useApi).mockReturnValue({
            data: undefined,
            isLoading: false,
            error: new Error("Test Error"),
        } as SWRResponse);

        renderWithProviders();
        expect(screen.getByText(/Something Went wrong!/i)).toBeInTheDocument();
    });

    it("renders categories and items when data is loaded", () => {
        vi.mocked(useApi).mockReturnValue({
            data: mockItems,
            isLoading: false,
            error: undefined,
        } as SWRResponse);

        renderWithProviders();

        expect(screen.getByText("single-target weapons")).toBeInTheDocument();
        expect(screen.getByText("Volcano")).toBeInTheDocument();
        expect(screen.getByText("crowd-control weapons")).toBeInTheDocument();
        expect(screen.getByText("Hive-Five")).toBeInTheDocument();
    });
});
