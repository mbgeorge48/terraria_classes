import React, { ChangeEvent, useCallback, useState } from "react";
import classNames from "classnames";

import { gameStages, roleClasses } from "../constants";
import { GameStageChangeHandler, Role } from "../types";

interface Props {
    min: number;
    max: number;
    selectedRole: Role;
    labelText: string;
    onGameStageChange: GameStageChangeHandler;
}

const Slider: React.FC<Props> = ({
    min,
    max,
    selectedRole,
    labelText,
    onGameStageChange,
}) => {
    const [inputValue, setInputValue] = useState(0);
    const [gameStageText, setGameStageText] = useState(gameStages[inputValue]);

    const handleInputChange = useCallback(
        (e: ChangeEvent) => {
            const newValue = Number((e.target as HTMLInputElement).value);
            setInputValue(newValue);
            setGameStageText(gameStages[newValue]);
            onGameStageChange(newValue);
        },
        [onGameStageChange]
    );

    return (
        <div className="flex flex-col justify-center flex-grow mx-12 font-semibold rounded-2xl">
            <div className="flex flex-row justify-center md:justify-between">
                <label
                    htmlFor="progressSlider"
                    className="hidden text-2xl md:block"
                >
                    {labelText}
                </label>
                <p className="text-2xl">{gameStageText}</p>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step="1"
                value={inputValue}
                className={classNames(
                    "w-full mx-4",
                    selectedRole
                        ? roleClasses[selectedRole].accent
                        : "accent-gray-500"
                )}
                id="progressSlider"
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Slider;
