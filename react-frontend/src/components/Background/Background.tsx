interface Props {
    backgroundPath: string;
}

const backgroundMap: Record<string, string> = {
    "1": "bg-1",
    "2": "bg-2",
    "3": "bg-3",
    "4": "bg-4",
    "5": "bg-5",
    "6": "bg-6",
};

export function Background({ backgroundPath }: Props) {
    const bgClass = backgroundMap[backgroundPath] || "bg-1";

    return (
        <div
            className={`fixed inset-0 -z-10 ${bgClass} bg-cover bg-center opacity-30`}
        />
    );
}
