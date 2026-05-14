import type { Meta, StoryObj } from "@storybook/react-vite";

import { CategoryContainer } from "./CategoryContainer";

const meta: Meta<typeof CategoryContainer> = {
    title: "Components/CategoryContainer",
    component: CategoryContainer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        heading: {
            control: "text",
        },
        children: {
            control: "text",
        },
    },
    decorators: [
        (Story) => (
            <div className="w-96">
                <Story />
            </div>
        ),
    ],
    args: {
        heading: "Category",
        children: "Category content goes here.",
    },
};

export default meta;
type Story = StoryObj<typeof CategoryContainer>;

export const Default: Story = {
    args: {},
};
