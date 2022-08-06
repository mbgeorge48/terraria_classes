import React, { useCallback } from "react";
import classNames from "classnames";
import { RoleChangeHandler, Role } from "../types";

interface Props {
  title: Role;
  baseClasses: string;
  onRoleChange: RoleChangeHandler;
  selectedRole: Role;
  selectedClasses: string;
}

const ClassButton: React.FC<Props> = ({
  title,
  baseClasses,
  onRoleChange,
  selectedRole,
  selectedClasses,
}) => {
  const handleClick = useCallback(() => {
    onRoleChange(title);
  }, [onRoleChange, title]);

  return (
    <button
      onClick={handleClick}
      className={classNames(
        "capitalize text-center font-semibold cursor-pointer px-6 py-2 md:w-64 rounded-3xl border-2 duration-150 text-xl hover:text-white transition-colors",
        baseClasses,
        selectedRole === title ? selectedClasses : "bg-white"
      )}
    >
      {title}
    </button>
  );
};

export default ClassButton;
