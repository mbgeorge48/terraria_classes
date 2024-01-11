import { useCallback } from "react";
import classNames from "classnames";
import { Role } from "../types";
import { roleClasses } from "../constants";
import { useRole } from "../context/RoleContext";
interface Props {
    title: Role;
}

export function ClassButton(props: Props) {
    const { title } = props;
    const { selectedRole, setSelectedRole } = useRole();

    const handleClick = useCallback(() => {
        setSelectedRole(title);
    }, [setSelectedRole, title]);
    return (
        <button
            onClick={handleClick}
            className={classNames(
                "capitalize flex flex-1 cursor-pointer px-6 py-2 flex-shrink-0 rounded-3xl border-2 duration-150 text-xl hover:text-white transition-colors justify-center",
                title &&
                    roleClasses[title].border.concat(
                        " ",
                        roleClasses[title].hoverBg
                    ),
                title && selectedRole === title
                    ? roleClasses[title].bg.concat(" ", "text-white")
                    : "bg-white"
            )}
        >
            {title}
        </button>
    );
}
