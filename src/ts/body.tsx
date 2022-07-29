import React, { useCallback, useState } from "react";
import Slider from "./controller/slider";
import ControllerContainer from "./controller/controller-container";
import Header from "./controller/header";
import DisplayContainer from "./display/display-container";
import { Role } from "./types";
import ExtraClassToggle from "./controller/extra-class-toggle";

const Body: React.FC = () => {
  const [selectedGameStage, setSelectedGameStage] = useState(0);
  const [selectedRole, setSelectedRole] = useState<Role>();
  const [displayExtraClasses, setDisplayExtraClasses] = useState(false);

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
  const updateDisplayExtraClasses = useCallback(
    (display: boolean) => {
      setDisplayExtraClasses(display);
    },
    [setDisplayExtraClasses]
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
          <ExtraClassToggle
            selectedRole={selectedRole}
            onToggle={updateDisplayExtraClasses}
          />
        </div>
        <ControllerContainer
          onRoleChange={updateSelectedRole}
          selectedRole={selectedRole}
          displayExtraClasses={displayExtraClasses}
        />
      </div>
      <DisplayContainer
        selectedRole={selectedRole}
        selectedGameStage={selectedGameStage}
      />
    </div>
  );
};

export default Body;
