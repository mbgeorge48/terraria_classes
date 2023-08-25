import React, { PropsWithChildren } from "react";

import { Role } from "^/types";
import { RoleContext } from "./RoleContext";

interface Props extends PropsWithChildren {
    selectedRole?: Role;
    setSelectedRole: (role: Role) => void;
}

export function RoleProvider(props: Props) {
    const { selectedRole = undefined, setSelectedRole, children } = props;

    return (
        <RoleContext.Provider
            value={{
                selectedRole,
                setSelectedRole,
            }}
        >
            {children}
        </RoleContext.Provider>
    );
}
