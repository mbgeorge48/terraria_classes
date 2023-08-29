import { render, RenderOptions } from "@testing-library/react";
import { RoleProvider } from "../context/RoleContext";
import React, { ReactElement } from "react";

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
            {children}
        </RoleProvider>
    );
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
