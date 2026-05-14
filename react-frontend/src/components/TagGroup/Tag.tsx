import {
    composeRenderProps,
    Tag as AriaTag,
    type TagProps as AriaTagProps,
} from "react-aria-components";

import type { Role } from "../../types";
import { styles } from "./styles";

export interface TagProps extends AriaTagProps {
    color?: Role;
}

export function Tag({ children, color, ...props }: TagProps) {
    const textValue = typeof children === "string" ? children : undefined;

    return (
        <AriaTag
            textValue={textValue}
            {...props}
            data-testid={`tag-${props.id}`}
            className={composeRenderProps(
                props.className,
                (className, renderProps) =>
                    styles({
                        ...renderProps,
                        className,
                        color: color || (props.id as Role),
                    }),
            )}
        >
            {children}
        </AriaTag>
    );
}
