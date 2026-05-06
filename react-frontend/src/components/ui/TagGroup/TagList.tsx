import {
    TagList as AriaTagList,
    type TagListProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function TagList<T extends object>({ ...props }: TagListProps<T>) {
    return (
        <AriaTagList {...props} className={twMerge("flex flex-wrap gap-2")} />
    );
}
