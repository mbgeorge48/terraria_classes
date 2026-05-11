import {
    TagGroup as AriaTagGroup,
    type TagGroupProps as AriaTagGroupProps,
} from "react-aria-components";
import type { TagListProps } from "react-aria-components";
import { TagList } from "./TagList";

export { Tag } from "./Tag";

export interface Props<T>
    extends
        Omit<AriaTagGroupProps, "children">,
        Pick<TagListProps<T>, "children"> {}

export function TagGroup<T extends object>({
    children,
    selectionMode = "single",
    ...props
}: Props<T>) {
    return (
        <AriaTagGroup
            {...props}
            selectionMode={selectionMode}
            className="flex flex-col gap-2"
        >
            <TagList>{children}</TagList>
        </AriaTagGroup>
    );
}
