import React, { PropsWithChildren, createContext, useContext } from "react";

export type bgOptions =
    | "bg-1"
    | "bg-2"
    | "bg-3"
    | "bg-4"
    | "bg-5"
    | "bg-6"
    | "bg-slate-200";

interface BackgroundContextType {
    selectedBackground: bgOptions;
    setSelectedBackground: (value: bgOptions) => void;
}

const BackgroundContext = createContext<BackgroundContextType>({
    selectedBackground: "bg-slate-200",
    setSelectedBackground: () => {},
});

export function useBackground() {
    return useContext(BackgroundContext);
}

interface Props extends PropsWithChildren, BackgroundContextType {}

export function BackgroundProvider(props: Props) {
    const { children } = props;

    return (
        <BackgroundContext.Provider value={{ ...props }}>
            {children}
        </BackgroundContext.Provider>
    );
}
