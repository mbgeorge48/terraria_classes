import {
    TagGroup as AriaTagGroup,
    type TagGroupProps as AriaTagGroupProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import type { TagListProps } from "react-aria-components";
import { TagList } from "./TagList";

export * from "./Tag";

export interface Props<T>
    extends
        Omit<AriaTagGroupProps, "children">,
        Pick<TagListProps<T>, "items" | "children" | "renderEmptyState"> {}

export function TagGroup<T extends object>({
    items,
    children,
    selectionMode = "single",
    ...props
}: Props<T>) {
    return (
        <AriaTagGroup
            {...props}
            selectionMode={selectionMode}
            className={twMerge("flex flex-col gap-2", props.className)}
        >
            <TagList items={items}>{children}</TagList>
        </AriaTagGroup>
    );
}
