import { type PropsWithChildren } from "react";
import {
    GameStageContext,
    type GameStageContextType,
} from "./GameStageContext";

interface Props extends PropsWithChildren, GameStageContextType {}

export function GameStageProvider(props: Props) {
    const { children, ...value } = props;

    return (
        <GameStageContext.Provider value={value}>
            {children}
        </GameStageContext.Provider>
    );
}
