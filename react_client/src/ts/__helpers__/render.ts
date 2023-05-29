import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

type RenderParameters = Parameters<typeof render>;
export function renderWithRouter(
    ui: RenderParameters[0],
    route: string,
    options?: RenderParameters[1]
): ReturnType<typeof render> {
    window.history.pushState({}, "Test page", route);
    return render(ui, { ...options, wrapper: BrowserRouter });
}
