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
    <div className="m-6">
      <div className="md:flex md:flex-row md:space-x-6 grid grid-cols-2 gap-4 justify-evenly">
        <ClassButton
          onRoleChange={onRoleChange}
          title="melee"
          baseClasses="border-melee hover:bg-melee"
          selectedRole={selectedRole}
          selectedClasses={"bg-melee text-white"}
        />
        <ClassButton
          onRoleChange={onRoleChange}
          title="ranged"
          baseClasses="border-ranged hover:bg-ranged"
          selectedRole={selectedRole}
          selectedClasses={"bg-ranged text-white"}
        />
        <ClassButton
          onRoleChange={onRoleChange}
          title="magic"
          baseClasses="border-magic hover:bg-magic"
          selectedRole={selectedRole}
          selectedClasses={"bg-magic text-white"}
        />
        <ClassButton
          onRoleChange={onRoleChange}
          title="summoner"
          baseClasses="border-summoner hover:bg-summoner"
          selectedRole={selectedRole}
          selectedClasses={"bg-summoner text-white"}
        />
        {displayExtraClasses ? (
          <>
            <ClassButton
              onRoleChange={onRoleChange}
              title="mixed"
              baseClasses="border-summoner hover:bg-summoner"
              selectedRole={selectedRole}
              selectedClasses={"bg-summoner text-white"}
            />
            <ClassButton
              onRoleChange={onRoleChange}
              title="tank"
              baseClasses="border-summoner hover:bg-summoner"
              selectedRole={selectedRole}
              selectedClasses={"bg-summoner text-white"}
            />
            <ClassButton
              onRoleChange={onRoleChange}
              title="healer"
              baseClasses="border-summoner hover:bg-summoner"
              selectedRole={selectedRole}
              selectedClasses={"bg-summoner text-white"}
            />
          </>
        ) : undefined}
      </div>
    </div>
  );
};

export default ControllerContainer;
