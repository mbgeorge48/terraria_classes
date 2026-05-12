import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { GameStageProvider } from "../../context/GameStageProvider";
import { RoleProvider } from "../../context/RoleProvider";
import { ControllerContainer } from "./ControllerContainer";

describe("ControllerContainer", () => {
    const mockSetSelectedRole = vi.fn();
    const mockSetSelectedGameStage = vi.fn();

    const renderWithProviders = (selectedRole = undefined) => {
        return render(
            <RoleProvider
                selectedRole={selectedRole}
                setSelectedRole={mockSetSelectedRole}
            >
                <GameStageProvider
                    selectedGameStage={0}
                    setSelectedGameStage={mockSetSelectedGameStage}
                >
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

        meleeTag.click();
        expect(mockSetSelectedRole).toHaveBeenCalledWith("melee");
    });

    it("calls setSelectedGameStage when a game stage slider is targetted", () => {
        renderWithProviders();
        const sliderInput = screen.getByRole("slider");

        fireEvent.change(sliderInput, { target: { value: "2" } });
        expect(mockSetSelectedGameStage).toHaveBeenCalledWith([2]);
    });
});
