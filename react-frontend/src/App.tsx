import { useState } from "react";
import { SWRConfig } from "swr";

import { fetcher } from "./api/fetcher";
import { Background } from "./components";
import { GameStageProvider } from "./context/GameStageProvider";
import { RoleProvider } from "./context/RoleProvider";
import { ControllerContainer } from "./features/controller/ControllerContainer";
import { ItemWrapper } from "./features/items/ItemWrapper";

function App() {
    const [randomIndex] = useState(() => Math.floor(Math.random() * 6));

    return (
        <SWRConfig value={{ fetcher }}>
            <Background backgroundPath={randomIndex} />
            <RoleProvider>
                <GameStageProvider>
                    <ControllerContainer />
                    <ItemWrapper />
                </GameStageProvider>
            </RoleProvider>
        </SWRConfig>
    );
}

export default App;
