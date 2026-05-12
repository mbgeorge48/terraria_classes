import { render, screen } from "@testing-library/react";
import type { SWRResponse } from "swr";
import { describe, expect, it, vi } from "vitest";

import { useApi } from "../../api/useApi";
import { GameStageProvider } from "../../context/GameStageProvider";
import { RoleProvider } from "../../context/RoleProvider";
import type { Item } from "../../types";
import { ItemWrapper } from "./ItemWrapper";

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

vi.mock("../../api/useApi");

const mockSetSelectedRole = vi.fn();
const mockSetSelectedGameStage = vi.fn();
vi.mock("../../context", () => ({
    useRole: () => ({
        selectedRole: "melee",
        setSelectedRole: mockSetSelectedRole,
    }),
    useGameStage: () => ({
        selectedGameStage: 0,
        setSelectedGameStage: mockSetSelectedGameStage,
    }),
}));

describe("ItemWrapper", () => {
    const renderWithProviders = () => {
        return render(
            <RoleProvider>
                <GameStageProvider>
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

    it("renders empty data state", () => {
        vi.mocked(useApi).mockReturnValue({
            data: undefined,
            isLoading: false,
            error: undefined,
        } as SWRResponse);

        renderWithProviders();
        expect(screen.getByText(/No data found/i)).toBeInTheDocument();
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
