import React, { ChangeEvent, useCallback, useState } from "react";
import classNames from "classnames";

import { gameStages } from "../constants";
import { GameStageChangeHandler } from "../types";

interface Props {
  min: number;
  max: number;
  rangeColour?: string;
  labelText: string;
  onGameStageChange: GameStageChangeHandler;
}

const Slider: React.FC<Props> = ({
  min,
  max,
  rangeColour,
  labelText,
  onGameStageChange,
}) => {
  const [inputValue, setInputValue] = useState(0);
  const [gameStageText, setGameStageText] = useState(gameStages[inputValue]);

  const handleInputChange = useCallback((e: ChangeEvent) => {
    const newValue = Number((e.target as HTMLInputElement).value);
    setInputValue(newValue);
    setGameStageText(gameStages[newValue]);
    onGameStageChange(newValue);
  }, []);

  return (
    <div className="flex flex-grow mx-12 flex-col justify-center rounded-2xl font-semibold">
      <div className="flex-row flex justify-between">
        <label htmlFor="progressSlider" className="text-2xl">
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
        className={classNames("w-full mx-4", rangeColour)}
        id="progressSlider"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Slider;
