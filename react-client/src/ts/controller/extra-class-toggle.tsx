import classNames from "classnames";
import { useCallback, useState } from "react";
import { roleClasses } from "../constants";
import { ExtraClassToggleHandler, Role } from "../types";

interface Props {
    initialValue?: boolean;
    selectedRole: Role;
    onToggle: ExtraClassToggleHandler;
}

export function ExtraClassToggle(props: Props) {
    const { selectedRole, onToggle, initialValue = false } = props;
    const [checkValue, setCheckValue] = useState(initialValue);

    const handleToggle = useCallback(() => {
        setCheckValue(!checkValue);
        onToggle(!checkValue);
    }, [checkValue, onToggle]);

    return (
        <div className="flex justify-start mx-2 space-x-2 text-sm">
            <label htmlFor="toggle">Show Extra Classes</label>
            <input
                id="toggle"
                type="checkbox"
                checked={checkValue}
                onChange={handleToggle}
                className={classNames(
                    "self-center",
                    selectedRole
                        ? roleClasses[selectedRole].accent
                        : "accent-gray-500"
                )}
            />
        </div>
    );
}
