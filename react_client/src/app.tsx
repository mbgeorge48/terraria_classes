import classNames from "classnames";
import React, { useState } from "react";

import Body from "./ts/body";
import "./css/index.css";
import { CreditPopover } from "./ts/credit-popover";
import { RoleProvider } from "./ts/context/RoleContext";
import { Role } from "./ts/types";

const App: React.FC = () => {
    const [selectedRole, setSelectedRole] = useState<Role>();
    return (
        <RoleProvider
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
        >
            <div
                className={classNames(
                    "font-sans  flex flex-col  mx-auto max-w-screen-2xl min-h-screen"
                )}
            >
                <Body />
                <div className="mt-auto mb-4 ml-6">
                    <CreditPopover />
                </div>
            </div>
        </RoleProvider>
    );
};
export default App;
