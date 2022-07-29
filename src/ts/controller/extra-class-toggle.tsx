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
    <label>
      <input
        type="checkbox"
        checked={checkValue}
        onChange={handleToggle}
        className={`accent-${selectedRole}`}
      />
      My Value
    </label>
  );
};

export default ExtraClassToggle;
