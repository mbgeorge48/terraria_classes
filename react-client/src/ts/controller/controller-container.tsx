import { ClassButton } from "./class-button";
import { Role } from "../types";

interface Props {
    displayExtraClasses: boolean;
}

export function ControllerContainer(props: Props) {
    const { displayExtraClasses } = props;
    const baseClasses: Role[] = ["melee", "ranged", "magic", "summoner"];
    const extraClasses: Role[] = ["mixed", "tank", "healer"];
    return (
        <div className="flex flex-col flex-wrap gap-4 p-4 sm:flex-row">
            {baseClasses.map((role) => (
                <ClassButton title={role} key={role} />
            ))}
            {displayExtraClasses &&
                extraClasses.map((role) => (
                    <ClassButton title={role} key={role} />
                ))}
        </div>
    );
}
