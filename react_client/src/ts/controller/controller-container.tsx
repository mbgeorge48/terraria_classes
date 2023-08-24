import React from "react";
import ClassButton from "./class-button";
import { Role, RoleChangeHandler } from "../types";

interface Props {
    onRoleChange: RoleChangeHandler;
    selectedRole: Role;
    displayExtraClasses: boolean;
}

const ControllerContainer: React.FC<Props> = (props) => {
    const { onRoleChange, selectedRole, displayExtraClasses } = props;
    const baseClasses: Role[] = ["melee", "ranged", "magic", "summoner"];
    const extraClasses: Role[] = ["mixed", "tank", "healer"];
    return (
        <div className="flex flex-col flex-wrap gap-4 p-4 sm:flex-row">
            {baseClasses.map((role) => (
                <ClassButton
                    onRoleChange={onRoleChange}
                    title={role}
                    selectedRole={selectedRole}
                    key={role}
                />
            ))}
            {displayExtraClasses &&
                extraClasses.map((role) => (
                    <ClassButton
                        onRoleChange={onRoleChange}
                        title={role}
                        selectedRole={selectedRole}
                        key={role}
                    />
                ))}
        </div>
    );
};

export default ControllerContainer;
