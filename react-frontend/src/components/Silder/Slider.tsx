import {
    Slider as AriaSlider,
    type SliderProps as AriaSliderProps,
    SliderOutput,
    SliderThumb,
    SliderTrack,
} from "react-aria-components/Slider";
import type { Role } from "../../types/roles";
import { gameStages } from "../constants";

import { trackStyles, fillStyles, thumbStyles } from "./styles";

export interface Props<T> extends AriaSliderProps<T> {
    thumbLabels?: string[];
    selectedRole?: Role;
}

export function Slider<T extends number>({
    thumbLabels,
    step = 1,
    minValue = 0,
    maxValue = Object.keys(gameStages).length - 1,
    ...props
}: Props<T>) {
    console.log(props.selectedRole);
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
                                isDisabled: renderProps.isDisabled,
                                selectedRole: props.selectedRole,
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
                                style={{
                                    transform: "translateX(-3px) translateY(0)",
                                }}
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
