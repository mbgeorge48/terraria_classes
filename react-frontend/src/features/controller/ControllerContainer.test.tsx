import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { GameStageProvider } from "../../context/GameStageProvider";
import { RoleProvider } from "../../context/RoleProvider";
import { ControllerContainer } from "./ControllerContainer";

const mockSetSelectedRole = vi.fn();
const mockSetSelectedGameStage = vi.fn();
vi.mock("../../context", () => ({
    useRole: () => ({
        selectedRole: undefined,
        setSelectedRole: mockSetSelectedRole,
    }),
    useGameStage: () => ({
        selectedGameStage: 0,
        setSelectedGameStage: mockSetSelectedGameStage,
    }),
}));

describe("ControllerContainer", () => {
    const renderWithProviders = () => {
        return render(
            <RoleProvider>
                <GameStageProvider>
                    <ControllerContainer />
                </GameStageProvider>
            </RoleProvider>,
        );
    };

    it("renders the screen", () => {
        renderWithProviders();
        expect(
            screen.getByRole("heading", { name: /terraria classes guide/i }),
        ).toBeInTheDocument();

        expect(screen.getByText("Select a class")).toBeInTheDocument();
        expect(
            screen.getByRole("gridcell", { name: /melee/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("gridcell", { name: /ranged/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("gridcell", { name: /magic/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("gridcell", { name: /summoning/i }),
        ).toBeInTheDocument();

        expect(screen.getByText("Select a game stage")).toBeInTheDocument();
        expect(screen.getByText("Pre-bosses")).toBeInTheDocument();
    });

    it("calls setSelectedRole when a class is selected", () => {
        renderWithProviders();
        const meleeTag = screen.getByRole("gridcell", { name: "Melee" });
        const rangedTag = screen.getByRole("gridcell", { name: "Ranged" });
        const magicTag = screen.getByRole("gridcell", { name: "Magic" });
        const summoningTag = screen.getByRole("gridcell", {
            name: "Summoning",
        });

        fireEvent.click(meleeTag);
        expect(mockSetSelectedRole).toHaveBeenCalledWith("melee");

        fireEvent.click(rangedTag);
        expect(mockSetSelectedRole).toHaveBeenCalledWith("ranged");

        fireEvent.click(magicTag);
        expect(mockSetSelectedRole).toHaveBeenCalledWith("magic");

        fireEvent.click(summoningTag);
        expect(mockSetSelectedRole).toHaveBeenCalledWith("summoning");
    });

    it("calls setSelectedGameStage when a game stage slider is targetted", () => {
        renderWithProviders();
        const sliderInput = screen.getByRole("slider");

        act(() => {
            fireEvent.change(sliderInput, { target: { value: "2" } });
        });
        expect(mockSetSelectedGameStage).toHaveBeenCalledWith([2]);
    });
});
