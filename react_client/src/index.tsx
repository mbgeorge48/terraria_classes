import classNames from "classnames";
import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./ts/body";
import "./css/index.css";
import { CreditPopover } from "./ts/credit-popover";

const backgrounds = ["bg-1", "bg-2", "bg-3", "bg-4", "bg-5", "bg-6"];
const useImageBackground = false;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <div
        className={classNames(
            "font-sans bg-origin-border flex flex-col min-h-screen bg-cover bg-no-repeat",
            useImageBackground
                ? backgrounds[Math.floor(Math.random() * backgrounds.length)]
                : "bg-stone-100"
        )}
    >
        <Body />
        <div className="mt-auto mb-4 ml-6">
            <CreditPopover />
        </div>
    </div>
);
