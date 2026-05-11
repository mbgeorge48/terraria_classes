import { type PropsWithChildren } from "react";
import { RoleContext, type RoleContextType } from "./RoleContext";

interface Props extends PropsWithChildren, RoleContextType {}

export function RoleProvider(props: Props) {
    const { children, ...value } = props;

    return (
        <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
    );
}
