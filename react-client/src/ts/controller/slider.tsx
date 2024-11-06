import { ChangeEvent, useState } from "react";
import classNames from "classnames";
import { roleClasses } from "../constants";
import { useRole } from "../context/RoleContext";
import { useGameStage } from "../context/GameStageContext";
import { useRequest } from "../api/request";
import { ApiGameStage } from "../types";

interface Props {
    labelText: string;
}

export function Slider(props: Props) {
    const { labelText } = props;

    const { setSelectedGameStage } = useGameStage();
    const { selectedRole } = useRole();
    const [inputValue, setInputValue] = useState(0);

    const { data, isLoading } = useRequest(`api/game-stages/`);

    if (isLoading || !data) {
        return null;
    }

    const highestStage = data.reduce(
        (max: ApiGameStage, stage: ApiGameStage) =>
            stage.level > max.level ? stage : max,
        data[0]
    );

    const handleInputChange = (e: ChangeEvent) => {
        const newValue = Number((e.target as HTMLInputElement).value);
        setInputValue(newValue);
        setSelectedGameStage(data[newValue].level);
    };

    return (
        <div className="flex flex-col justify-center flex-grow mx-12 font-semibold rounded-2xl">
            <div className="flex flex-row justify-center md:justify-between">
                <label
                    htmlFor="progressSlider"
                    className="hidden text-2xl md:block"
                >
                    {labelText}
                </label>
                <h2 className="text-2xl">{data[inputValue].stage}</h2>
            </div>
            <input
                type="range"
                min={0}
                max={highestStage.level}
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
}
