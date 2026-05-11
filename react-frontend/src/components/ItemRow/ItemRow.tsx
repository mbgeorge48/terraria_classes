import {
    Link as AriaLink,
    type LinkProps as AriaLinkProps,
} from "react-aria-components/Link";

import type { Item } from "../../types/item";
import type { Role } from "../../types/roles";
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
                alt=""
                className="object-contain w-10 h-10"
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
            >
                {props.item.name}
            </AriaLink>
        </span>
    );
}
