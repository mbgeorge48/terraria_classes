import React, { useCallback } from "react";
import classNames from "classnames";
import { RoleChangeHandler } from "./types";

interface Props {
  title: string;
  baseClasses: string;
  onRoleChange: RoleChangeHandler;
  selectedRole: string;
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
  }, [onRoleChange]);

  return (
    <button
      onClick={handleClick}
      className={classNames(
        "capitalize text-center bg-white cursor-pointer bg-grey px-6 py-2 md:w-64 rounded-3xl border-2 duration-150 text-xl hover:text-white transition-colors",
        baseClasses,
        selectedRole === title ? selectedClasses : undefined
      )}
    >
      {title}
    </button>
  );
};

export default ClassButton;
