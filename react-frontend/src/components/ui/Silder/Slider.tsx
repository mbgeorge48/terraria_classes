import {
    Slider as AriaSlider,
    type SliderProps as AriaSliderProps,
    SliderOutput,
    SliderThumb,
    SliderTrack,
} from "react-aria-components/Slider";
import { tv } from "tailwind-variants";
import type { Role } from "../../../types/roles";
import { gameStages } from "../constants";

const trackStyles = tv({
    base: "rounded-full w-full h-1",
    variants: {
        isDisabled: {
            false: "bg-neutral-300 dark:bg-neutral-700 forced-colors:bg-[ButtonBorder] ",
            true: "bg-neutral-200 dark:bg-neutral-800 forced-colors:bg-[ButtonBorder]",
        },
    },
});

const fillStyles = tv({
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

const thumbStyles = tv({
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

export interface Props<T> extends AriaSliderProps<T> {
    thumbLabels?: string[];
    selectedRole?: Role;
}

export function Slider<T extends number | number[]>({
    thumbLabels,
    step = 1,
    minValue = 0,
    maxValue = Object.keys(gameStages).length - 1,
    ...props
}: Props<T>) {
    return (
        <AriaSlider
            {...props}
            step={step}
            minValue={minValue}
            maxValue={maxValue}
            className="font-sans orientation-horizontal:grid orientation-vertical:flex grid-cols-[1fr_auto] flex-col items-center gap-2 orientation-horizontal:w-64 orientation-horizontal:max-w-[calc(100%-10px)]"
        >
            <SliderTrack className="flex items-center col-span-2 group orientation-horizontal:h-5 orientation-vertical:w-5 orientation-vertical:h-38">
                {({ state, ...renderProps }) => (
                    <>
                        <div
                            className={trackStyles({
                                ...renderProps,
                            })}
                        />
                        <div
                            className={fillStyles({
                                isDisabled: renderProps.isDisabled,
                                selectedRole: props.selectedRole,
                            })}
                            style={
                                {
                                    "--size":
                                        state.getThumbPercent(0) * 100 + "%",
                                } as React.CSSProperties
                            }
                        />
                        {state.values.map((_, i) => (
                            <SliderThumb
                                key={i}
                                index={i}
                                aria-label={thumbLabels?.[i]}
                                className={({ isDisabled }) =>
                                    thumbStyles({
                                        isDisabled,
                                        selectedRole: props.selectedRole,
                                    })
                                }
                            />
                        ))}
                    </>
                )}
            </SliderTrack>
            <SliderOutput className="text-sm text-neutral-500 dark:text-neutral-400 orientation-vertical:hidden">
                {({ state }) =>
                    state.values.map((v) => thumbLabels?.[v] ?? v).join(" – ")
                }
            </SliderOutput>
        </AriaSlider>
    );
}
