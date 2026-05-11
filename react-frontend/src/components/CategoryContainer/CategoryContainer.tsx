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
        <div className="relative w-3/4 mb-auto lg:w-auto group sm:w-2/3">
            <div
                className={containerBackgroundStyle({
                    selectedRole: props.selectedRole,
                })}
            />
            <div
                className={containerStyle({ selectedRole: props.selectedRole })}
            >
                <h1
                    className={headingStyle({
                        selectedRole: props.selectedRole,
                    })}
                >
                    {props.heading}
                </h1>
                <div className="flex flex-col px-2 space-y-2">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
