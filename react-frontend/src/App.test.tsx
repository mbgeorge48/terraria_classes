import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { SWRConfig } from "swr";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";

import App from "./App";
import type { Item } from "./types";

const mockItems: Item[] = [
    {
        name: "Zenith",
        url: "https://terraria.wiki.gg/wiki/Zenith",
        imgPath: "https://terraria.wiki.gg/images/Zenith.png",
        role: "melee",
        category: "Swords",
        gameStageAvailable: 6,
    },
];

const server = setupServer(
    http.get("http://localhost:8000/api/melee/6/", () => {
        return HttpResponse.json(mockItems);
    }),
);

describe("App Integration", () => {
    beforeAll(() => server.listen());
    afterEach(() => {
        server.resetHandlers();
    });
    afterAll(() => server.close());

    const renderWithFreshCache = () => {
        return render(
            <SWRConfig value={{ provider: () => new Map() }}>
                <App />
            </SWRConfig>,
        );
    };

    it("renders the app and allows selecting a role and game stage", async () => {
        renderWithFreshCache();

        expect(
            screen.getByRole("heading", { name: /no data/i }),
        ).toBeInTheDocument();

        const meleeTag = screen.getByTestId("tag-melee");
        fireEvent.click(meleeTag);

        const slider = screen.getByRole("slider");
        fireEvent.change(slider, { target: { value: 6 } });

        await waitFor(() => {
            expect(screen.getByText("Zenith")).toBeInTheDocument();
        });

        expect(screen.getByText("Swords")).toBeInTheDocument();
    });

    it("shows loading state while fetching", async () => {
        server.use(
            http.get("http://localhost:8000/api/melee/0/", async () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(HttpResponse.json([]));
                    }, 50);
                });
            }),
        );

        renderWithFreshCache();

        const meleeTag = screen.getByTestId("tag-melee");
        fireEvent.click(meleeTag);

        expect(
            screen.getByRole("heading", { name: /loading/i }),
        ).toBeInTheDocument();

        await waitFor(() => {
            expect(
                screen.queryByRole("heading", { name: /loading/i }),
            ).not.toBeInTheDocument();
        });
    });

    it("shows error state when API fails", async () => {
        server.use(
            http.get("http://localhost:8000/api/melee/0/", () => {
                return new HttpResponse(null, { status: 500 });
            }),
        );

        renderWithFreshCache();

        const meleeTag = screen.getByTestId("tag-melee");
        fireEvent.click(meleeTag);

        await waitFor(() => {
            expect(
                screen.getByRole("heading", { name: /error/i }),
            ).toBeInTheDocument();
        });
        expect(screen.getByText(/Something went wrong!/i)).toBeInTheDocument();
    });
});
