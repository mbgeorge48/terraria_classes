import { PropsWithChildren, createContext, useContext } from "react";

interface GameStageContextType {
    selectedGameStage: number;
    // eslint-disable-next-line no-unused-vars
    setSelectedGameStage: (stage: number) => void;
}

const GameStageContext = createContext<GameStageContextType>({
    selectedGameStage: 0,
    setSelectedGameStage: () => {},
});

export function useGameStage() {
    return useContext(GameStageContext);
}

interface Props extends PropsWithChildren, GameStageContextType {}

export function GameStageProvider(props: Props) {
    const { children } = props;

    return (
        <GameStageContext.Provider value={{ ...props }}>
            {children}
        </GameStageContext.Provider>
    );
}
