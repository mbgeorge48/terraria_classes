import { type PropsWithChildren, useState } from "react";

import type { Role } from "../types";
import { RoleContext } from "./RoleContext";

export function RoleProvider(props: PropsWithChildren) {
    const [selectedRole, setSelectedRole] = useState<Role>();

    return (
        <RoleContext.Provider value={{ selectedRole, setSelectedRole }}>
            {props.children}
        </RoleContext.Provider>
    );
}
