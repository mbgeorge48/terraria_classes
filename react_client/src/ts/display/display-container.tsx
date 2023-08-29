import classNames from "classnames";
import React from "react";

import { processData } from "../utils";
import { roleClasses } from "../constants";
import { items } from "../types";
import ItemContainer from "./item-container";
import { useRole } from "../context/RoleContext";
import { useAPI } from "../hooks/api/useAPI";
interface Props {
    selectedGameStage: number;
}

const DisplayContainer: React.FC<Props> = ({ selectedGameStage }) => {
    const { selectedRole } = useRole();
    const { data, isValidating, isLoading, error } = useAPI<items>(
        `/api/${selectedRole}/${selectedGameStage}/`
    );

    if (isValidating || isLoading) {
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
        console.error(error);
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
            <div className="flex flex-row flex-wrap justify-around gap-4 p-4 xs:flex-col">
                <ItemContainer
                    itemCategory="weapons"
                    data={processedData.weaponsList}
                />
                <ItemContainer
                    itemCategory="armor"
                    data={processedData.armorList}
                />
                <ItemContainer
                    itemCategory="accessories"
                    data={processedData.accessoriesList}
                />
                <ItemContainer
                    itemCategory="buffs"
                    data={processedData.buffsList}
                />
                <ItemContainer
                    itemCategory="mounts"
                    data={processedData.mountsList}
                />
                <ItemContainer
                    itemCategory="lights"
                    data={processedData.lightsList}
                />
            </div>
        </div>
    );
};

export default DisplayContainer;
