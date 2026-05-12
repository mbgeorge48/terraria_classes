import type { Meta, StoryObj } from "@storybook/react-vite";

import { Background } from "./Background";

const meta = {
    title: "Components/Background",
    component: Background,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div className="w-96 h-96">
                <Story />
            </div>
        ),
    ],
    argTypes: {
        backgroundPath: {
            control: { type: "range", min: 1, max: 6, step: 1 },
        },
    },
} satisfies Meta<typeof Background>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        backgroundPath: "1",
    },
};
