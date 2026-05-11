import { tv } from "tailwind-variants";

export const trackStyles = tv({
    base: "rounded-full w-full h-1",
    variants: {
        isDisabled: {
            false: "bg-neutral-300 dark:bg-neutral-700 forced-colors:bg-[ButtonBorder] ",
            true: "bg-neutral-200 dark:bg-neutral-800 forced-colors:bg-[ButtonBorder]",
        },
    },
});

export const fillStyles = tv({
    base: "absolute rounded-full w-(--size) h-1 start-(--start,0)",
    variants: {
        isDisabled: {
            false: "bg-blue-500 forced-colors:bg-[Highlight]",
            true: "bg-neutral-300 dark:bg-neutral-600 forced-colors:bg-[GrayText]",
        },
        selectedRole: {
            melee: "bg-melee",
            ranged: "bg-ranged",
            magic: "bg-magic",
            summoner: "bg-summoner",
            mixed: "bg-mixed",
            healer: "bg-healer",
            tank: "bg-tank",
            default: "bg-neutral-300",
        },
    },
    defaultVariants: {
        selectedRole: "default",
    },
});

export const thumbStyles = tv({
    base: "w-4.5 h-4.5 group-orientation-horizontal:mt-5 group-orientation-vertical:ml-2.5 rounded-full bg-neutral-50 dark:bg-neutral-900 border-3",
    variants: {
        isDisabled: {
            true: "border-neutral-300 dark:border-neutral-700 ",
        },
        selectedRole: {
            melee: "border-melee hover:bg-melee",
            ranged: "border-ranged hover:bg-ranged",
            magic: "border-magic hover:bg-magic",
            summoner: "border-summoner hover:bg-summoner",
            mixed: "border-mixed hover:bg-mixed",
            healer: "border-healer hover:bg-healer",
            tank: "border-tank hover:bg-tank",
            default: "border-neutral-300 hover:bg-neutral-300",
        },
    },
    defaultVariants: {
        selectedRole: "default",
    },
});
