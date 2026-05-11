import {
    Tag as AriaTag,
    type TagProps as AriaTagProps,
    composeRenderProps,
} from "react-aria-components";
import { styles } from "./styles";
import type { Role } from "../../types/roles";

export interface TagProps extends AriaTagProps {
    color?: Role;
}

export function Tag({ children, color, ...props }: TagProps) {
    const textValue = typeof children === "string" ? children : undefined;

    return (
        <AriaTag
            textValue={textValue}
            {...props}
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
