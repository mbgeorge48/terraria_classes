import React, { useCallback, useState } from "react";

import { ExtraClassToggleHandler, Role } from "../types";

interface Props {
  initialValue?: boolean;
  selectedRole: Role;
  onToggle: ExtraClassToggleHandler;
}

const ExtraClassToggle: React.FC<Props> = ({
  selectedRole,
  onToggle,
  initialValue = false,
}) => {
  const [checkValue, setCheckValue] = useState(initialValue);

  const handleToggle = useCallback(() => {
    setCheckValue(!checkValue);
    onToggle(!checkValue);
  }, [checkValue, onToggle]);

  return (
    <div className="space-x-2 text-sm mx-2 flex justify-start">
      <label htmlFor="toggle">Show Extra Classes</label>
      <input
        id="toggle"
        type="checkbox"
        checked={checkValue}
        onChange={handleToggle}
        className={`self-center accent-${selectedRole}`}
      />
    </div>
  );
};

export default ExtraClassToggle;
