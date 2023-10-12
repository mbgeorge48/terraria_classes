import { useCallback, useState } from "react";
import { Slider } from "./controller/slider";
import { ControllerContainer } from "./controller/controller-container";
import { Header } from "./controller/header";
import { DisplayContainer } from "./display/display-container";
import { ExtraClassToggle } from "./controller/extra-class-toggle";
import { roleClasses } from "./constants";
import classNames from "classnames";
import { useRole } from "./context/RoleContext";

export function Body() {
    const { selectedRole } = useRole();

    const [displayExtraClasses, setDisplayExtraClasses] = useState(false);

    const updateDisplayExtraClasses = useCallback(
        (display: boolean) => {
            setDisplayExtraClasses(display);
        },
        [setDisplayExtraClasses]
    );

    return (
        <>
            <div
                className={classNames(
                    "rounded-lg m-4 border-2 border-black bg-opacity-30",
                    selectedRole ? roleClasses[selectedRole].bg : "gray-400/70"
                )}
            >
                <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 ">
                    <Header />
                    <Slider
                        min={0}
                        max={6}
                        labelText={"Select your game stage"}
                    />
                </div>
                <ControllerContainer
                    displayExtraClasses={displayExtraClasses}
                />
                <ExtraClassToggle
                    selectedRole={selectedRole}
                    onToggle={updateDisplayExtraClasses}
                />
            </div>
            {selectedRole && <DisplayContainer />}
        </>
    );
}
