import "../src/index.css";

import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            element: "#storybook-root",
            config: {
                rules: [],
            },
            test: "error",
        },
    },
    tags: ["autodocs", "a11y-test"],
};

export default preview;
