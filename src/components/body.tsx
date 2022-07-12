import React, { useCallback, useState } from "react";
import Slider from "./controller/slider";
// import { gameStages } from "./common/constants";
import Container from "./controller/container";
import Header from "./controller/header";

const Body: React.FC = () => {
  // const [selectedGameStage, setSelectedGameStage] = useState(gameStages[0]);
  const [selectedRole, setSelectedRole] = useState<string>("");

  const updateSelectedRole = useCallback(
    (role: string) => {
      setSelectedRole(role);
    },
    [setSelectedRole]
  );

  return (
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
          rangeColour={`accent-${selectedRole}`}
        />
      </div>
      <Container
        onRoleChange={updateSelectedRole}
        selectedRole={selectedRole}
      />
    </div>
  );
};

export default Body;
