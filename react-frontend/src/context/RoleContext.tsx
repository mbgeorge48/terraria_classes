import { type PropsWithChildren, createContext, useContext } from "react";
import type { Role } from "../types/roles";

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

interface Props extends PropsWithChildren, RoleContextType {}

export function RoleProvider(props: Props) {
    const { children } = props;

    return (
        <RoleContext.Provider value={{ ...props }}>
            {children}
        </RoleContext.Provider>
    );
}
