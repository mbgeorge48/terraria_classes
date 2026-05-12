import type { PropsWithChildren } from "react";

import type { Role } from "../../types";
import {
    containerBackgroundStyle,
    containerStyle,
    headingStyle,
} from "./styles";

interface Props extends PropsWithChildren {
    heading: string;
    selectedRole?: Role;
}

export function CategoryContainer(props: Props) {
    return (
        <div className="relative flex flex-col w-full h-full group">
            <div
                className={containerBackgroundStyle({
                    selectedRole: props.selectedRole,
                })}
            />
            <div
                className={`${containerStyle({ selectedRole: props.selectedRole })} flex-1 flex flex-col`}
            >
                <h1
                    data-testid={`${props.heading.replaceAll(" ", "-").toLowerCase()}-heading`}
                    className={headingStyle({
                        selectedRole: props.selectedRole,
                    })}
                >
                    {props.heading}
                </h1>
                <div className="flex flex-col flex-1 px-2 space-y-2">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
