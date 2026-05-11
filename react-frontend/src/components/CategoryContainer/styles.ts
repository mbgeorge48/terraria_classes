import { tv } from "tailwind-variants";

export const containerBackgroundStyle = tv({
    base: "absolute inset-0 transition-all duration-300 ease-in-out delay-150 rounded-xl blur-none group-hover:blur-sm group-hover:-inset-1 group-active:blur-sm group-active:-inset-1",
    variants: {
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

export const containerStyle = tv({
    base: "relative rounded-xl border-4 bg-white text-gray-600 py-2 drop-shadow-md",
    variants: {
        selectedRole: {
            melee: "border-melee",
            ranged: "border-ranged",
            magic: "border-magic",
            summoner: "border-summoner",
            mixed: "border-mixed",
            healer: "border-healer",
            tank: "border-tank",
            default: "border-neutral-300",
        },
    },
    defaultVariants: {
        selectedRole: "default",
    },
});

export const headingStyle = tv({
    base: "mb-4 text-xl capitalize p-2 text-white font-medium",
    variants: {
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
