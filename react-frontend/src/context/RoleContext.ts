import { createContext, useContext } from "react";
import type { Role } from "../types/roles";

export interface RoleContextType {
    selectedRole: Role;
    setSelectedRole: (role: Role) => void;
}
export const RoleContext = createContext<RoleContextType>({
    selectedRole: undefined,
    setSelectedRole: () => {},
});

export function useRole() {
    return useContext(RoleContext);
}
