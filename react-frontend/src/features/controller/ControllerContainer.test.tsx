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
        expect(screen.getByText("terraria classes guide")).toBeInTheDocument();

        expect(screen.getByText("Select a class")).toBeInTheDocument();
        expect(screen.getByText("Melee")).toBeInTheDocument();
        expect(screen.getByText("Ranged")).toBeInTheDocument();
        expect(screen.getByText("Magic")).toBeInTheDocument();
        expect(screen.getByText("Summoning")).toBeInTheDocument();

        expect(screen.getByText("Select a game stage")).toBeInTheDocument();
        expect(screen.getByText("Pre-bosses")).toBeInTheDocument();
    });

    it("calls setSelectedRole when a class is selected", () => {
        renderWithProviders();
        const meleeTag = screen.getByText("Melee");
        const rangedTag = screen.getByText("Ranged");
        const magicTag = screen.getByText("Magic");
        const summoningTag = screen.getByText("Summoning");

        act(() => {
            meleeTag.click();
        });
        expect(mockSetSelectedRole).toHaveBeenCalledWith("melee");

        act(() => {
            rangedTag.click();
        });
        expect(mockSetSelectedRole).toHaveBeenCalledWith("ranged");

        act(() => {
            magicTag.click();
        });
        expect(mockSetSelectedRole).toHaveBeenCalledWith("magic");

        act(() => {
            summoningTag.click();
        });
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
