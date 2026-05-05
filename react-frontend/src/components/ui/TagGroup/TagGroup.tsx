import {
    Tag as AriaTag,
    TagGroup as AriaTagGroup,
    type TagGroupProps as AriaTagGroupProps,
    type TagProps as AriaTagProps,
    TagList,
    type TagListProps,
} from "react-aria-components";
import { composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import type { Role } from "../../../types/roles";

const tagStyles = tv({
    base: "capitalize flex flex-1 cursor-pointer px-6 py-2 flex-shrink-0 rounded-3xl border-2 duration-150 text-xl transition-colors justify-center items-center gap-1 hover:text-white [-webkit-tap-highlight-color:transparent] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black",
    variants: {
        color: {
            melee: "border-melee hover:bg-melee",
            ranged: "border-ranged hover:bg-ranged",
            magic: "border-magic hover:bg-magic",
            summoner: "border-summoner hover:bg-summoner",
            mixed: "border-mixed hover:bg-mixed",
            healer: "border-healer hover:bg-healer",
            tank: "border-tank hover:bg-tank",
            default: "border-neutral-300 hover:bg-neutral-300",
        },
        isSelected: {
            true: "text-white",
            false: "bg-white text-current",
        },
    },
    compoundVariants: [
        { color: "melee", isSelected: true, class: "bg-melee" },
        { color: "ranged", isSelected: true, class: "bg-ranged" },
        { color: "magic", isSelected: true, class: "bg-magic" },
        { color: "summoner", isSelected: true, class: "bg-summoner" },
        { color: "mixed", isSelected: true, class: "bg-mixed" },
        { color: "healer", isSelected: true, class: "bg-healer" },
        { color: "tank", isSelected: true, class: "bg-tank" },
        { color: "default", isSelected: true, class: "bg-neutral-500" },
    ],
});

export interface TagGroupProps<T>
    extends
        Omit<AriaTagGroupProps, "children">,
        Pick<TagListProps<T>, "items" | "children" | "renderEmptyState"> {}

export function TagGroup<T extends object>({
    items,
    children,
    selectionMode = "single",
    ...props
}: TagGroupProps<T>) {
    return (
        <AriaTagGroup
            {...props}
            selectionMode={selectionMode}
            className={twMerge("flex flex-col gap-2", props.className)}
        >
            <TagList items={items} className="flex flex-wrap gap-2">
                {children}
            </TagList>
        </AriaTagGroup>
    );
}

export interface TagProps extends AriaTagProps {
    color?: Role;
}

export function Tag({ children, color, ...props }: TagProps) {
    const textValue = typeof children === "string" ? children : undefined;

    return (
        <AriaTag
            textValue={textValue}
            {...props}
            className={composeRenderProps(
                props.className,
                (className, renderProps) =>
                    tagStyles({
                        ...renderProps,
                        className,
                        color: color || (props.id as Role),
                    }),
            )}
        >
            {children}
        </AriaTag>
    );
}
