import type { Meta, StoryObj } from "@storybook/react-vite";
import { Item } from "./Item";
import sampleItemImage from "../../assets/images/sample-item.png";

const meta: Meta<typeof Item> = {
    title: "Components/Item",
    component: Item,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    decorators: [
        (Story) => (
            <div className="w-96">
                <Story />
            </div>
        ),
    ],
    args: {
        item: {
            name: "Example Item",
            role: undefined,
            url: "#",
            imgPath: sampleItemImage,
            category: "weapons",
            gameStageAvailable: 0,
        },
    },
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
    args: {},
};
