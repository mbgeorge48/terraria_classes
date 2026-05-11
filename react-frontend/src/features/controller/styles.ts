import { tv } from "tailwind-variants";

export const containerStyles = tv({
    base: "rounded-lg m-4 p-4 border-2 border-black space-y-4",
    variants: {
        selectedRole: {
            melee: "bg-melee/20",
            ranged: "bg-ranged/20",
            magic: "bg-magic/20",
            summoning: "bg-summoning/20",
            mixed: "bg-mixed/20",
            healer: "bg-healer/20",
            tank: "bg-tank/20",
            default: "bg-neutral-300/20",
        },
    },

    defaultVariants: {
        selectedRole: "default",
    },
});
