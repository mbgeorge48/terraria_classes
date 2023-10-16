import { Role } from "../types";
import { PropsWithChildren, createContext, useContext } from "react";

interface RoleContextType {
    selectedRole: Role;
    // eslint-disable-next-line no-unused-vars
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
