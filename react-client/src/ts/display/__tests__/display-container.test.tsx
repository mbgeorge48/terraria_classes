import { render } from "../../__helpers__/render";
import { DisplayContainer } from "../display-container";
import * as request from "../../api/request";
import { item, items } from "../../types";

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
        jest.spyOn(request, "useRequest").mockReturnValue({
            isValidating: true,
            data: undefined,
            error: undefined,
            mutate: jest.fn(),
            isLoading: true,
        });
        const subject = render(<DisplayContainer />);
        expect(subject.getByText("Loading…")).not.toBeNull();
    });

    it("API has failed", async () => {
        jest.spyOn(request, "useRequest").mockReturnValue({
            isValidating: false,
            data: undefined,
            error: { name: "test name", message: "test message" },
            mutate: jest.fn(),
            isLoading: false,
        });
        const subject = render(<DisplayContainer />);
        expect(subject.getByText("Something Went wrong!")).not.toBeNull();
    });

    it("API has returned some data", async () => {
        jest.spyOn(request, "useRequest").mockReturnValue({
            isValidating: false,
            data: mockItems,
            error: undefined,
            mutate: jest.fn(),
            isLoading: false,
        });
        const subject = render(<DisplayContainer />);
        expect(subject.getByText("Stick")).not.toBeNull();
    });
});
