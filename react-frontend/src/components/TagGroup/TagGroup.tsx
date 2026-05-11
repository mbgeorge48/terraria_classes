import {
    TagGroup as AriaTagGroup,
    type TagGroupProps as AriaTagGroupProps,
} from "react-aria-components";
import type { TagListProps } from "react-aria-components";
import { TagList } from "./TagList";
import { Label } from "../Label/Label";

export { Tag } from "./Tag";

export interface Props<T>
    extends
        Omit<AriaTagGroupProps, "children">,
        Pick<TagListProps<T>, "children"> {
    label?: string;
}

export function TagGroup<T extends object>({
    selectionMode = "single",
    ...props
}: Props<T>) {
    return (
        <AriaTagGroup
            {...props}
            selectionMode={selectionMode}
            className="flex flex-col"
        >
            <Label>{props.label}</Label>
            <TagList>{props.children}</TagList>
        </AriaTagGroup>
    );
}
