import { useMemo } from "react";

import { useApi } from "../../api/useApi";
import { CategoryContainer, ItemRow } from "../../components";
import { useGameStage, useRole } from "../../context";
import type { Item } from "../../types";

export function ItemWrapper() {
    const { selectedRole } = useRole();
    const { selectedGameStage } = useGameStage();

    const { data, isLoading, error } = useApi<Item[]>(
        selectedRole ? `api/${selectedRole}/${selectedGameStage}/` : null,
    );

    const memoizedData = useMemo(() => {
        if (!data) return {};

        return data.reduce(
            (grouped, item) => {
                const category = item.category;
                if (!grouped[category]) {
                    grouped[category] = [];
                }
                grouped[category].push(item);
                return grouped;
            },
            {} as Record<string, Item[]>,
        );
    }, [data]);

    if (isLoading) {
        return (
            <div className="max-w-6xl px-4 py-8 mx-auto">
                <div className="grid items-stretch grid-cols-1 gap-6 justify-items-center">
                    <CategoryContainer
                        heading="Loading"
                        selectedRole={selectedRole}
                    >
                        <p className="py-4 text-center ">Loading&hellip;</p>
                    </CategoryContainer>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-6xl px-4 py-8 mx-auto">
                <div className="grid items-stretch grid-cols-1 gap-6  justify-items-center">
                    <CategoryContainer
                        heading="Error"
                        selectedRole={selectedRole}
                    >
                        <p className="py-4 text-center ">
                            Something went wrong!
                        </p>
                    </CategoryContainer>
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="max-w-6xl px-4 py-8 mx-auto">
                <div className="grid items-stretch grid-cols-1 gap-6  justify-items-center">
                    <CategoryContainer
                        heading="No Data"
                        selectedRole={selectedRole}
                    >
                        <p className="py-4 text-center">No data found</p>
                    </CategoryContainer>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl px-4 py-8 mx-auto">
            <div className="grid items-stretch grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {Object.keys(memoizedData)
                    .sort(
                        (a, b) =>
                            memoizedData[a].length - memoizedData[b].length,
                    )
                    .map((category) => (
                        <CategoryContainer
                            key={category}
                            heading={category}
                            selectedRole={selectedRole}
                        >
                            {memoizedData[category].map((item) => (
                                <ItemRow
                                    key={item.name}
                                    item={item}
                                    selectedRole={selectedRole}
                                />
                            ))}
                        </CategoryContainer>
                    ))}
            </div>
        </div>
    );
}
