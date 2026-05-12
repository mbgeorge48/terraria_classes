import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Header } from "./Header";

describe("Header Component", () => {
    it("renders header correctly saying terraria classes guide", () => {
        render(<Header />);
        expect(screen.getByText("terraria classes guide")).toBeInTheDocument();
    });
});
