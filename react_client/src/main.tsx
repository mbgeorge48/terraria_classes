import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import classNames from "classnames";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

// One day I'll do something with these backgrounds
const backgrounds = ["bg-1", "bg-2", "bg-3", "bg-4", "bg-5", "bg-6"];
const useImageBackground = false;

root.render(
    <div
        className={classNames(
            "bg-cover bg-origin-border",
            useImageBackground
                ? backgrounds[Math.floor(Math.random() * backgrounds.length)]
                : "bg-slate-200"
        )}
    >
        <App />
    </div>
);
