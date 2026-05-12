import { createContext, useContext } from "react";

interface GameStageContextType {
    selectedGameStage: number;
    setSelectedGameStage: (stage: number) => void;
}

export const GameStageContext = createContext<GameStageContextType>({
    selectedGameStage: 0,
    setSelectedGameStage: () => {},
});

export function useGameStage() {
    return useContext(GameStageContext);
}
