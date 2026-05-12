import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Background } from "./Background";

describe("Background Component", () => {
    it("renders with the correct background class", () => {
        const { container } = render(<Background backgroundPath={1} />);
        const background = container.firstChild as HTMLElement;
        expect(background).toHaveClass("bg-1");
    });

    it("defaults to bg-1 if invalid path is provided", () => {
        const { container } = render(<Background backgroundPath={0} />);
        const background = container.firstChild as HTMLElement;
        expect(background).toHaveClass("bg-1");
    });

    it("applies layout classes", () => {
        const { container } = render(<Background backgroundPath={1} />);
        const background = container.firstChild as HTMLElement;
        expect(background).toHaveClass(
            "fixed",
            "inset-0",
            "-z-10",
            "bg-cover",
            "bg-center",
        );
    });
});
