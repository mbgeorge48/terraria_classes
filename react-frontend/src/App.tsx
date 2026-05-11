import { useState } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "./api/fetcher";
import "./App.css";
import { RoleProvider } from "./context/RoleContext";
import { GameStageProvider } from "./context/GameStageContext";
import type { Role } from "./types/roles";
import { Container } from "./features/controller/Container";

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
                    <Container />
                </GameStageProvider>
            </RoleProvider>
        </SWRConfig>
    );
}

export default App;
