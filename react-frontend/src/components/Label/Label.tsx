import type { PropsWithChildren } from "react";

export function Label(props: PropsWithChildren) {
    if (props.children === undefined) {
        return null;
    }

    return (
        <span className="font-medium text-gray-700 text-md">
            {props.children}
        </span>
    );
}
