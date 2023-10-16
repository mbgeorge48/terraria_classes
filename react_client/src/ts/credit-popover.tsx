import { Popover } from "@headlessui/react";

export function CreditPopover() {
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button
                        className={`flex flex-row  border-2 border-gray-500 bg-white p-2 gap-1 hover:border-yellow-400 focus:outline-none
              ${open ? "rounded-b-xl border-t-white" : "rounded-xl"}`}
                    >
                        <span>Credits</span>
                        <div
                            className={`self-center ${
                                open && "rotate-180 transform"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-3 h-3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                />
                            </svg>
                        </div>
                    </Popover.Button>
                    <Popover.Panel
                        className={`absolute z-10 -top-16 py-2 px-4 border-2 border-gray-500 bg-white flex flex-col
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
