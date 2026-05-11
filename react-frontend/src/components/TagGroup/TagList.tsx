import {
    TagList as AriaTagList,
    type TagListProps,
} from "react-aria-components";

export function TagList<T extends object>({ ...props }: TagListProps<T>) {
    return <AriaTagList {...props} className="flex flex-wrap gap-2" />;
}
