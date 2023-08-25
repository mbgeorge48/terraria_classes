import classNames from "classnames";
import React from "react";

import { roleClasses } from "../constants";
import { ItemCategory, items } from "../types";
import Item from "./item";
import { useRole } from "../context/RoleContext";

interface Props {
    itemCategory: ItemCategory;
    data?: items;
}

const ItemContainer: React.FC<Props> = ({ itemCategory, data }) => {
    const { selectedRole } = useRole();
    if (!selectedRole || (data && data.length < 1)) {
        return null;
    }

    return (
        <div className="relative w-3/4 mb-auto lg:w-auto group sm:w-2/3">
            <div
                className={classNames(
                    "absolute -inset-0 rounded-xl blur-none transition-all ease-in-out delay-150 duration-300 group-hover:blur-sm group-hover:-inset-1 group-active:blur-sm group-active:-inset-1",
                    selectedRole ? roleClasses[selectedRole].bg : undefined
                )}
            ></div>
            <div
                className={classNames(
                    "relative rounded-xl border-4 bg-white text-gray-600 py-2 drop-shadow-md",
                    selectedRole ? roleClasses[selectedRole].border : undefined
                )}
            >
                <h1
                    className={classNames(
                        "mb-4 text-2xl capitalize p-2 text-white font-medium",
                        selectedRole ? roleClasses[selectedRole].bg : undefined
                    )}
                >
                    {itemCategory}
                </h1>
                <div className="flex flex-col px-2 space-y-2">
                    {data?.map((item, index) => (
                        <Item
                            item={item}
                            key={index}
                            selectedRole={selectedRole}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItemContainer;
