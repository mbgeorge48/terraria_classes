import { useState } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "./api/fetcher";
import type { Role } from "./types/roles";
import { ControllerContainer } from "./features/controller/ControllerContainer";
import { ItemWrapper } from "./features/items/ItemWrapper";
import { RoleProvider } from "./context/RoleProvider";
import { GameStageProvider } from "./context/GameStageProvider";

function App() {
    const [selectedRole, setSelectedRole] = useState<Role>();
    const [selectedGameStage, setSelectedGameStage] = useState(0);

    return (
        <SWRConfig value={{ fetcher }}>
            <RoleProvider
                selectedRole={selectedRole}
                setSelectedRole={setSelectedRole}
            >
                <GameStageProvider
                    selectedGameStage={selectedGameStage}
                    setSelectedGameStage={setSelectedGameStage}
                >
                    <ControllerContainer />
                    <ItemWrapper />
                </GameStageProvider>
            </RoleProvider>
        </SWRConfig>
    );
}

export default App;
