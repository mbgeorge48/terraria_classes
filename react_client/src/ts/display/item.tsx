import classNames from "classnames";
import { roleClasses } from "../constants";
import { item, Role } from "../types";

interface Props {
    item: item;
    selectedRole: Role;
}

export function Item(props: Props) {
    return (
        <a
            className={classNames(
                "flex flex-row space-x-4 px-2 w-fit place-items-center decoration-4 underline-offset-2 hover:underline",
                props.selectedRole
                    ? roleClasses[props.selectedRole].decoration
                    : undefined
            )}
            href={props.item.url}
            target="_blank"
            rel="noreferrer"
        >
            <img
                src={props.item.imgPath}
                alt=""
                className="object-contain w-10 h-10"
            />
            <p className="text-lg">{props.item.name}</p>
        </a>
    );
}
