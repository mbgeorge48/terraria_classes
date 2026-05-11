import {
    Link as AriaLink,
    type LinkProps as AriaLinkProps,
} from "react-aria-components/Link";

import type { Item, Role } from "../../types";
import { styles } from "./styles";

interface Props extends AriaLinkProps {
    selectedRole?: Role;
    item: Item;
}

export function ItemRow(props: Props) {
    return (
        <span className="flex flex-row px-2 space-x-4 w-fit place-items-center">
            <img
                src={props.item.imgPath}
                alt={props.item.name}
                className="object-contain w-10 h-10"
                data-testid={`${props.item.name.replaceAll(" ", "-").toLowerCase()}-img`}
            />
            <AriaLink
                {...props}
                className={styles({
                    selectedRole: props.selectedRole,
                })}
                href={props.item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={props.item.name}
                data-testid={`${props.item.name.replaceAll(" ", "-").toLowerCase()}-label`}
            >
                {props.item.name}
            </AriaLink>
        </span>
    );
}
