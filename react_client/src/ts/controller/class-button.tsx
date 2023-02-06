import React, { useCallback } from "react";
import classNames from "classnames";

import { RoleChangeHandler, Role } from "../types";
import { roleClasses } from "../constants";

interface Props {
  title: Role;
  onRoleChange: RoleChangeHandler;
  selectedRole: Role;
}

const ClassButton: React.FC<Props> = ({
  title,
  onRoleChange,
  selectedRole,
}) => {
  const handleClick = useCallback(() => {
    onRoleChange(title);
  }, [onRoleChange, title]);
  return (
    <button
      onClick={handleClick}
      className={classNames(
        "capitalize text-center font-semibold cursor-pointer px-6 py-2 md:w-64 rounded-3xl border-2 duration-150 text-xl hover:text-white transition-colors",
        title
          ? roleClasses[title].border.concat(" ", roleClasses[title].hoverBg)
          : undefined,
        title && selectedRole === title
          ? roleClasses[title].bg.concat(" ", "text-white")
          : "bg-white"
      )}
    >
      {title}
    </button>
  );
};

export default ClassButton;
