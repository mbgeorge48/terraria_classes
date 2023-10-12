import { fireEvent, render, screen } from "@testing-library/react";
import { CreditPopover } from "../credit-popover";

it("should render the credits component", () => {
    render(<CreditPopover />);

    expect(screen.getByText("Credits")).not.toBeNull();
    fireEvent.click(screen.getByRole("button"));
    expect(
        screen.getByText("Designed and created by me, Matt G")
    ).not.toBeNull();
});
