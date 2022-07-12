import React from "react";

interface Props {
  selectedRole: string;
}

const DisplayContainer: React.FC<Props> = ({ selectedRole }) => {
  return (
    <div className="m-6">
      <div className="md:flex md:flex-row md:space-x-6 grid grid-cols-2 gap-4 justify-evenly">
        {selectedRole}
      </div>
    </div>
  );
};

export default DisplayContainer;
