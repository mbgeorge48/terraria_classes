import { tv } from "tailwind-variants";

export const styles = tv({
    base: "capitalize flex flex-1 cursor-pointer px-6 py-2 flex-shrink-0 rounded-3xl border-4 duration-150 text-xl transition-colors justify-center items-center gap-1 hover:text-white [-webkit-tap-highlight-color:transparent] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black",
    variants: {
        color: {
            melee: "border-melee hover:bg-melee",
            ranged: "border-ranged hover:bg-ranged",
            magic: "border-magic hover:bg-magic",
            summoning: "border-summoning hover:bg-summoning",
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
        { color: "summoning", isSelected: true, class: "bg-summoning" },
        { color: "mixed", isSelected: true, class: "bg-mixed" },
        { color: "healer", isSelected: true, class: "bg-healer" },
        { color: "tank", isSelected: true, class: "bg-tank" },
        { color: "default", isSelected: true, class: "bg-neutral-500" },
    ],
});
