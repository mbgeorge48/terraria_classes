import { useGameStage } from "../../context/GameStageContext";
import { useRole } from "../../context/RoleContext";
import { useApi } from "../../api/useApi";

import { useMemo } from "react";

import type { Item, Items } from "../../types/item";
import { CategoryContainer } from "../../components/CategoryContainer/CategoryContainer";
import { ItemRow } from "../../components/ItemRow/ItemRow";

export function ItemWrapper() {
    const { selectedRole } = useRole();
    const { selectedGameStage } = useGameStage();

    const { data, isLoading, error } = useApi<Items>(
        `api/${selectedRole}/${selectedGameStage}/`,
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
        <>
            {Object.keys(memoizedData).map((category) => (
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
        </>
    );
}
