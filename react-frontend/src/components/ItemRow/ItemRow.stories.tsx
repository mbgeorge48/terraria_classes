import type { Meta, StoryObj } from "@storybook/react-vite";

import sampleItemImage from "../../assets/images/sample-item.png";
import { ItemRow } from "./ItemRow";

const meta: Meta<typeof ItemRow> = {
    title: "Components/ItemRow",
    component: ItemRow,
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
type Story = StoryObj<typeof ItemRow>;

export const Default: Story = {
    args: {},
};
