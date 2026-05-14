import type { TagListProps } from "react-aria-components";
import {
    TagGroup as AriaTagGroup,
    type TagGroupProps as AriaTagGroupProps,
} from "react-aria-components";

import { Label } from "..";
import { TagList } from "./TagList";

export interface TagGroupProps<T>
    extends
        Omit<AriaTagGroupProps, "children">,
        Pick<TagListProps<T>, "children"> {
    label: string;
}

export function TagGroup<T extends object>({
    selectionMode = "single",
    ...props
}: TagGroupProps<T>) {
    return (
        <AriaTagGroup
            {...props}
            selectionMode={selectionMode}
            className="flex flex-col"
            aria-label={props.label}
        >
            <Label>{props.label}</Label>
            <TagList>{props.children}</TagList>
        </AriaTagGroup>
    );
}
