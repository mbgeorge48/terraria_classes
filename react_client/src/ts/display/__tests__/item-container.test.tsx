import { fakeData } from "../../__tests__/utils.test";
import { ItemContainer } from "../item-container";
import { render } from "../../__helpers__/render";

it("should render an item container when there is a selected role", () => {
    const subject = render(
        <ItemContainer itemCategory={"weapons"} data={fakeData} />
    );
    expect(subject.container).not.toBeNull();
    expect(subject.getByText("weapons")).not.toBeNull();
    expect(subject.getByText(fakeData[0].name)).not.toBeNull();
    expect(subject.getAllByRole("img")).toHaveLength(fakeData.length);
    expect(subject.getAllByRole("link")).toHaveLength(fakeData.length);
});
