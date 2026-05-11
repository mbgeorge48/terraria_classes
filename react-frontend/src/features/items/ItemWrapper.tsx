import { useMemo } from "react";

import { useApi } from "../../api/useApi";
import { CategoryContainer, ItemRow } from "../../components";
import { useGameStage } from "../../context/GameStageContext";
import { useRole } from "../../context/RoleContext";
import type { Item, Items } from "../../types";

export function ItemWrapper() {
    const { selectedRole } = useRole();
    const { selectedGameStage } = useGameStage();

    const { data, isLoading, error } = useApi<Items>(
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
        return <div>Loading&hellip;</div>;
    }

    if (error) {
        console.error(error);
        return <div>Something Went wrong!</div>;
    }
    console.log({ data, memoizedData });

    return (
        <div className="max-w-6xl px-4 py-8 mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
