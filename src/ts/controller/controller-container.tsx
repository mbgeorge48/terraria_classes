import React from "react";
import ClassButton from "./class-button";
import { Role, RoleChangeHandler } from "../types";

interface Props {
  onRoleChange: RoleChangeHandler;
  selectedRole: Role;
  displayExtraClasses: boolean;
}

const ControllerContainer: React.FC<Props> = ({
  onRoleChange,
  selectedRole,
  displayExtraClasses,
}) => {
  return (
    <div className="m-4">
      <div className="grid grid-cols-1 gap-4 md:flex md:flex-row md:flex-wrap justify-evenly">
        <ClassButton
          onRoleChange={onRoleChange}
          title="melee"
          selectedRole={selectedRole}
        />
        <ClassButton
          onRoleChange={onRoleChange}
          title="ranged"
          selectedRole={selectedRole}
        />
        <ClassButton
          onRoleChange={onRoleChange}
          title="magic"
          selectedRole={selectedRole}
        />
        <ClassButton
          onRoleChange={onRoleChange}
          title="summoner"
          selectedRole={selectedRole}
        />
        {displayExtraClasses ? (
          <>
            <ClassButton
              onRoleChange={onRoleChange}
              title="mixed"
              selectedRole={selectedRole}
            />
            <ClassButton
              onRoleChange={onRoleChange}
              title="tank"
              selectedRole={selectedRole}
            />
            <ClassButton
              onRoleChange={onRoleChange}
              title="healer"
              selectedRole={selectedRole}
            />
          </>
        ) : undefined}
      </div>
    </div>
  );
};

export default ControllerContainer;
