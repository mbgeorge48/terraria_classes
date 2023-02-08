import React from "react";
import { screen, render } from "@testing-library/react";

import DisplayContainer from "./display-container";
import * as api from "../api/api";
import { item, items } from "../types";

const mockItem: item = {
    name: "Stick",
    role: "melee",
    url: "website.com",
    imgPath: "path",
    category: "weapons",
    gameStageAvailable: 0,
};

const mockItems: items = [mockItem];

describe("DisplayContainer", () => {
    it("API is loading", async () => {
        jest.spyOn(api, "useAPI").mockReturnValue({
            isValidating: true,
            data: undefined,
            error: undefined,
            mutate: jest.fn(),
        });
        render(
            <DisplayContainer selectedRole={"melee"} selectedGameStage={0} />
        );
        expect(screen.getByText("Loading…")).not.toBeNull();
    });

    it("API has failed", async () => {
        jest.spyOn(api, "useAPI").mockReturnValue({
            isValidating: false,
            data: undefined,
            error: { name: "test name", message: "test message" },
            mutate: jest.fn(),
        });
        render(
            <DisplayContainer selectedRole={"melee"} selectedGameStage={0} />
        );
        expect(screen.getByText("Something Went wrong!")).not.toBeNull();
    });

    it("API has returned some data", async () => {
        jest.spyOn(api, "useAPI").mockReturnValue({
            isValidating: false,
            data: mockItems,
            error: undefined,
            mutate: jest.fn(),
        });
        render(
            <DisplayContainer selectedRole={"melee"} selectedGameStage={0} />
        );
        expect(screen.getByText("Stick")).not.toBeNull();
    });
});
