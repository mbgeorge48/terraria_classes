import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag, TagGroup } from "./TagGroup";

const meta: Meta<typeof TagGroup> = {
    title: "Components/TagGroup",
    component: TagGroup,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        selectionMode: {
            control: "select",
            options: ["none", "single", "multiple"],
        },
        label: {
            control: "text",
        },
    },
};

export default meta;
type Story = StoryObj<typeof TagGroup>;

export const Default: Story = {
    render: (args) => (
        <TagGroup {...args}>
            <Tag id="melee">Melee</Tag>
            <Tag id="ranged">Ranged</Tag>
            <Tag id="magic">Magic</Tag>
            <Tag id="summoner">Summoner</Tag>
        </TagGroup>
    ),
    args: {
        selectionMode: "single",
        label: "Select a class",
    },
};
