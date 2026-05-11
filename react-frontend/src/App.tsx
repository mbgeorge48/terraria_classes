import { useState } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "./api/fetcher";
import { RoleProvider } from "./context/RoleContext";
import { GameStageProvider } from "./context/GameStageContext";
import type { Role } from "./types/roles";
import { ControllerContainer } from "./features/controller/ControllerContainer";
import { ItemWrapper } from "./features/items/ItemWrapper";

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
