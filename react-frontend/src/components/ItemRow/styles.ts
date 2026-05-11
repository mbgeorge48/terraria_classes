import { tv } from "tailwind-variants";

export const styles = tv({
    base: "decoration-4 underline-offset-2 hover:underline",
    variants: {
        selectedRole: {
            melee: "decoration-melee",
            ranged: "decoration-ranged",
            magic: "decoration-magic",
            summoning: "decoration-summoning",
            mixed: "decoration-mixed",
            healer: "decoration-healer",
            tank: "decoration-tank",
            default: "decoration-neutral-300",
        },
    },

    defaultVariants: {
        selectedRole: "default",
    },
});
