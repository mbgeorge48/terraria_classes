import { useCallback } from "react";
import { Slider } from "../../components/Silder/Slider";
import { Tag, TagGroup } from "../../components/TagGroup/TagGroup";
import { useGameStage } from "../../context/GameStageContext";
import { useRole } from "../../context/RoleContext";
import type { Role } from "../../types/roles";
import { Header } from "./Heading";
import { containerStyles } from "./styles";
import type { Selection } from "react-aria-components";

export function ControllerContainer() {
    const { selectedRole, setSelectedRole } = useRole();
    const { setSelectedGameStage } = useGameStage();

    const handleRoleChange = useCallback(
        (keys: Selection) => {
            const newRole = [...keys][0] as Role;
            setSelectedRole(newRole);
        },
        [setSelectedRole],
    );

    return (
        <div
            className={containerStyles({
                selectedRole: selectedRole,
            })}
        >
            <Header />

            <TagGroup
                aria-label="Role Selection"
                label="Select a class"
                onSelectionChange={handleRoleChange}
                selectionBehavior="toggle"
            >
                <Tag id="melee">Melee</Tag>
                <Tag id="ranged">Ranged</Tag>
                <Tag id="magic">Magic</Tag>
                <Tag id="summoner">Summoner</Tag>
            </TagGroup>

            <Slider
                aria-label="Game Stage Selection"
                label="Select a game stage"
                thumbLabels={[
                    "Pre-bosses",
                    "Pre-Hardmode",
                    "Pre-mech bosses",
                    "Pre-Plantera",
                    "Pre-Golem",
                    "Pre-Lunar Events",
                    "Endgame",
                ]}
                selectedRole={selectedRole}
                onChange={setSelectedGameStage}
            />
        </div>
    );
}
