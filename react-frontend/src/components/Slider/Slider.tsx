import {
    Slider as AriaSlider,
    SliderOutput,
    type SliderProps as AriaSliderProps,
    SliderThumb,
    SliderTrack,
} from "react-aria-components/Slider";

import type { Role } from "../../types";
import { Label } from "..";
import { fillStyles, thumbStyles, trackStyles } from "./styles";

export interface SliderProps<T> extends AriaSliderProps<T> {
    thumbLabels?: string[];
    selectedRole?: Role;
    label: string;
}

export function Slider<T extends number>({
    step = 1,
    ...props
}: SliderProps<T>) {
    return (
        <AriaSlider
            {...props}
            step={step}
            minValue={props.minValue}
            maxValue={props.maxValue}
            className="orientation-horizontal:grid orientation-vertical:flex grid-cols-[1fr_auto] flex-col items-center gap-2 orientation-horizontal:w-64 orientation-horizontal:max-w-[calc(100%-10px)]"
            aria-label={props.label}
        >
            <Label>{props?.label}</Label>
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
                                aria-label={props.thumbLabels?.[i]}
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
            <SliderOutput className="text-lg text-gray-700">
                {({ state }) =>
                    state.values
                        .map((v) => props.thumbLabels?.[v] ?? v)
                        .join(" - ")
                }
            </SliderOutput>
        </AriaSlider>
    );
}
