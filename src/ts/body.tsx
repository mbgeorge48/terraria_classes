import React, { useCallback, useState } from "react";
import Slider from "./controller/slider";
import ControllerContainer from "./controller/controller-container";
import Header from "./controller/header";
import DisplayContainer from "./display/display-container";
import { Role } from "./types";

const Body: React.FC = () => {
  const [selectedGameStage, setSelectedGameStage] = useState(0);
  const [selectedRole, setSelectedRole] = useState<Role>();

  const updateSelectedGameStage = useCallback(
    (index: number) => {
      setSelectedGameStage(index);
    },
    [setSelectedGameStage]
  );

  const updateSelectedRole = useCallback(
    (role: Role) => {
      setSelectedRole(role);
    },
    [setSelectedRole]
  );

  return (
    <div>
      <div
        className={`rounded-lg m-4 border-2 border-black bg-${
          selectedRole ? selectedRole : "gray-400/70"
        } bg-opacity-20`}
      >
        <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4 ">
          <Header />
          <Slider
            min={0}
            max={6}
            labelText={"Select your game stage"}
            rangeColour={
              selectedRole ? `accent-${selectedRole}` : "accent-gray-600"
            }
            onGameStageChange={updateSelectedGameStage}
          />
        </div>
        <ControllerContainer
          onRoleChange={updateSelectedRole}
          selectedRole={selectedRole}
        />
      </div>
      <p>{selectedGameStage}</p>
      <DisplayContainer
        selectedRole={selectedRole}
        selectedGameStage={selectedGameStage}
      />
    </div>
  );
};

export default Body;
