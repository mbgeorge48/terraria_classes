import classNames from "classnames";
import React from "react";

import { processData } from "../utils";
import { roleClasses } from "../constants";
import { items, Role } from "../types";
import ItemContainer from "./item-container";
import { useAPI } from "../api/api";

interface Props {
    selectedRole: Role;
    selectedGameStage: number;
}

const DisplayContainer: React.FC<Props> = ({
    selectedRole,
    selectedGameStage,
}) => {
    const { data, isValidating, error } = useAPI<items>(
        `/api/${selectedRole}/${selectedGameStage}/`
    );

    if (isValidating) {
        return (
            <div
                className={classNames(
                    "rounded-lg m-4 border-2 border-black bg-opacity-30 py-4",
                    selectedRole ? roleClasses[selectedRole].bg : "gray-400/70"
                )}
            >
                Loading&hellip;
            </div>
        );
    }

    if (error) {
        console.log(error);
        return (
            <div
                className={classNames(
                    "rounded-lg m-4 p-4 border-2 border-black bg-opacity-30 py-4",
                    selectedRole ? roleClasses[selectedRole].bg : "gray-400/70"
                )}
            >
                Something Went wrong!
            </div>
        );
    }

    if (!data) {
        return null;
    }
    const processedData = processData(data);

    return (
        <div className="m-4">
            <div className="grid grid-cols-1 gap-4 lg:flex lg:flex-wrap lg:justify-around">
                <ItemContainer
                    selectedRole={selectedRole}
                    itemCategory="weapons"
                    data={processedData.weaponsList}
                />
                <ItemContainer
                    selectedRole={selectedRole}
                    itemCategory="armor"
                    data={processedData.armorList}
                />
                <ItemContainer
                    selectedRole={selectedRole}
                    itemCategory="accessories"
                    data={processedData.accessoriesList}
                />
                <ItemContainer
                    selectedRole={selectedRole}
                    itemCategory="buffs"
                    data={processedData.buffsList}
                />
                {/* Don't tend to style nicely */}
                {/* <ItemContainer
                    selectedRole={selectedRole}
                    itemCategory="mounts"
                    data={processedData.mountsList}
                /> */}
                {/* <ItemContainer
                    selectedRole={selectedRole}
                    itemCategory="lights"
                    data={processedData.lightsList}
                /> */}
            </div>
        </div>
    );
};

export default DisplayContainer;
