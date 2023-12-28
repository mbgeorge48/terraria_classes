import { render, RenderOptions } from "@testing-library/react";
import { RoleProvider } from "../context/RoleContext";
import React, { ReactElement } from "react";
import { GameStageProvider } from "../context/GameStageContext";

const consoleError = console.error;

beforeAll(() => {
    console.error = jest.fn();
});

afterAll(() => {
    console.error = consoleError;
});

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <RoleProvider setSelectedRole={jest.fn()} selectedRole={"melee"}>
            <GameStageProvider
                setSelectedGameStage={jest.fn()}
                selectedGameStage={0}
            >
                {children}
            </GameStageProvider>
        </RoleProvider>
    );
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
