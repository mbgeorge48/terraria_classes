import { type PropsWithChildren, useState } from "react";

import { GameStageContext } from "./GameStageContext";

export function GameStageProvider(props: PropsWithChildren) {
    const [selectedGameStage, setSelectedGameStage] = useState(0);

    return (
        <GameStageContext.Provider
            value={{ selectedGameStage, setSelectedGameStage }}
        >
            {props.children}
        </GameStageContext.Provider>
    );
}
