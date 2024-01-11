import classNames from "classnames";
import { processData } from "../utils";
import { roleClasses } from "../constants";
import { ItemContainer } from "./item-container";
import { useRole } from "../context/RoleContext";
import { useRequest } from "../api/request";
import { useGameStage } from "../context/GameStageContext";

export function DisplayContainer() {
    const { selectedRole } = useRole();
    const { selectedGameStage } = useGameStage();

    const { data, isLoading, error } = useRequest(
        `api/${selectedRole}/${selectedGameStage}/`
    );

    if (isLoading) {
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
}
