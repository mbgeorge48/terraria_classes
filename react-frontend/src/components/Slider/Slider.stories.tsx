import type { Meta, StoryObj } from "@storybook/react-vite";

import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
    title: "Components/Slider",
    component: Slider,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        step: {
            control: "number",
        },
        minValue: {
            control: "number",
        },
        maxValue: {
            control: "number",
        },
        isDisabled: {
            control: "boolean",
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
        step: 1,
        minValue: 0,
        maxValue: 6,
        thumbLabels: [
            "Pre-bosses",
            "Pre-Hardmode",
            "Pre-mech bosses",
            "Pre-Plantera",
            "Pre-Golem",
            "Pre-Lunar Events",
            "Endgame",
        ],
    },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    args: {},
};

export const Disabled: Story = {
    args: {
        value: 2,
        isDisabled: true,
    },
};
