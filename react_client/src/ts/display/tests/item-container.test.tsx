import { render, screen } from "@testing-library/react";

import React from "react";
import { fakeData } from "../../tests/utils.test";

import ItemContainer from "../item-container";

it("should render an item container when there is a selected role", () => {
    const { container } = render(
        <ItemContainer itemCategory={"weapons"} data={fakeData} />
    );
    expect(container).not.toBeNull();
    expect(screen.getByText("weapons")).not.toBeNull();
    expect(screen.getByText(fakeData[0].name)).not.toBeNull();
    expect(screen.getAllByRole("img")).toHaveLength(fakeData.length);
    expect(screen.getAllByRole("link")).toHaveLength(fakeData.length);
});
