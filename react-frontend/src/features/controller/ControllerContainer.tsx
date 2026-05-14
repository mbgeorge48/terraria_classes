import { useCallback } from "react";
import type { Selection } from "react-aria-components";

import { Slider, Tag, TagGroup } from "../../components";
import { useGameStage, useRole } from "../../context";
import type { Role } from "../../types";
import { gameStages } from "../../utils/constants";
import { Header } from "./Header";
import { containerStyles } from "./styles";

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
                label="Select a class"
                onSelectionChange={handleRoleChange}
                selectionBehavior="toggle"
            >
                <Tag id="melee">Melee</Tag>
                <Tag id="ranged">Ranged</Tag>
                <Tag id="magic">Magic</Tag>
                <Tag id="summoning">Summoning</Tag>
            </TagGroup>

            <Slider
                label="Select a game stage"
                thumbLabels={Object.values(gameStages).map((stage) => stage)}
                selectedRole={selectedRole}
                onChange={setSelectedGameStage}
                maxValue={Object.keys(gameStages).length - 1}
            />
        </div>
    );
}
