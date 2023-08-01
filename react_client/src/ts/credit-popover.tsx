import { Popover } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import React from "react";

export function CreditPopover() {
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button
                        className={`flex flex-row  border-2 border-gray-500 bg-white p-2 hover:border-yellow-400 focus:outline-none
              ${open ? "rounded-b-xl" : "rounded-xl"}`}
                    >
                        <span>Credits</span>
                        <ChevronUpIcon
                            className={`w-5 h-5 self-center ${
                                open ? "rotate-180 transform" : undefined
                            }`}
                        />
                    </Popover.Button>
                    <Popover.Panel
                        className={`absolute z-10 -top-16 py-2 px-4 border-2 border-gray-400 bg-white flex flex-col
            ${open ? "rounded-t-xl rounded-r-xl" : undefined}`}
                    >
                        <span>Designed and created by me, Matt G</span>
                        <div>
                            <span>Checkout the </span>
                            <a
                                href="https://github.com/mbgeorge48/terraria_classes"
                                target="_blank"
                                rel="noreferrer"
                                className="underline decoration-4 decoration-yellow-400"
                            >
                                GitHub repo
                            </a>
                            <span> for more info</span>
                        </div>
                    </Popover.Panel>
                </>
            )}
        </Popover>
    );
}
