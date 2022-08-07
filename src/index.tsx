import classNames from "classnames";
import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./ts/body";
import "./css/index.css";
import { CreditPopover } from "./ts/credit-popover";

const backgrounds = ["bg-1", "bg-2", "bg-3", "bg-4", "bg-5", "bg-6"];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div
    className={classNames(
      "flex flex-col min-h-screen font-sans bg-origin-border bg-cover bg-no-repeat",
      backgrounds[Math.floor(Math.random() * backgrounds.length)]
    )}
  >
    <Body />
    <div className="ml-6 mt-auto mb-4">
      <CreditPopover />
    </div>
  </div>
);
