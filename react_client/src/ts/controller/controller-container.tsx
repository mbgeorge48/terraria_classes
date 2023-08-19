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
        <div className="m-4">
            <div className="grid grid-cols-1 gap-4 md:flex md:flex-row md:flex-wrap justify-evenly">
                {baseClasses.map((role) => (
                    <ClassButton
                        onRoleChange={onRoleChange}
                        title={role}
                        selectedRole={selectedRole}
                    />
                ))}
                {displayExtraClasses &&
                    extraClasses.map((role) => (
                        <ClassButton
                            onRoleChange={onRoleChange}
                            title={role}
                            selectedRole={selectedRole}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ControllerContainer;
