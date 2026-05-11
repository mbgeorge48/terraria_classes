import { tv } from "tailwind-variants";

export const trackStyles = tv({
    base: "rounded-full w-full h-2",
    variants: {
        isDisabled: {
            false: "bg-neutral-300  forced-colors:bg-[ButtonBorder] ",
            true: "bg-neutral-200 forced-colors:bg-[ButtonBorder]",
        },
        selectedRole: {
            melee: "bg-melee/30",
            ranged: "bg-ranged/30",
            magic: "bg-magic/30",
            summoner: "bg-summoner/30",
            mixed: "bg-mixed/30",
            healer: "bg-healer/30",
            tank: "bg-tank/30",
            default: "bg-neutral-200",
        },
    },
    defaultVariants: {
        selectedRole: "default",
    },
});

export const fillStyles = tv({
    base: "absolute rounded-full w-(--size) h-2 start-(--start,0)",
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
    base: "w-4.5 h-4.5 rounded-full bg-neutral-50  border-2",
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
