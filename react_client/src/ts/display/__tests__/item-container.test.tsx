import { screen } from "@testing-library/react";
import { fakeData } from "../../__tests__/utils.test";
import { ItemContainer } from "../item-container";
import { render } from "../../__helpers__/render";

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
