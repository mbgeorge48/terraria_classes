import { fireEvent, render } from "@testing-library/react";
import { CreditPopover } from "../credit-popover";

it("should render the credits component", () => {
    const subject = render(<CreditPopover />);

    expect(subject.getByText("Credits")).not.toBeNull();
    fireEvent.click(subject.getByRole("button"));
    expect(
        subject.getByText("Designed and created by me, Matt G")
    ).not.toBeNull();
});
