import { Role } from "../types";

import React, { PropsWithChildren, createContext, useContext } from "react";

interface RoleContextType {
    selectedRole: Role;
    setSelectedRole: (role: Role) => void;
}

const RoleContext = createContext<RoleContextType>({
    selectedRole: undefined,
    setSelectedRole: () => {},
});

export function useRole() {
    return useContext(RoleContext);
}

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
