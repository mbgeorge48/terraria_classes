import { Role } from "^/types";

import { createContext, useContext } from "react";

interface RoleContextType {
    selectedRole: Role;
    setSelectedRole: (role: Role) => void;
}

export const RoleContext = createContext<RoleContextType>({
    selectedRole: undefined,
    setSelectedRole: () => {},
});

// interface RoleProviderType {
//     children: ReactNode;
// }

// export function RoleProvider({ children }: RoleProviderType) {
//     // const [selectedRole, setSelectedRole] = useState<Role>();

//     // const updateSelectedRole = (role: Role) => {
//     //     setSelectedRole(role);
//     // };
//     return (
//         <RoleContext.Provider value={{selectedRole, setSelectedRole}}>
//             {children}
//         </RoleContext.Provider>
//     );
// }

export function useRole() {
    return useContext(RoleContext);
}
