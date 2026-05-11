/// <reference types="vitest/config" />
// https://vite.dev/config/
import babel from "@rolldown/plugin-babel";
import tailwind from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
    plugins: [
        tailwind(),
        react(),
        babel({
            presets: [reactCompilerPreset()],
        }),
    ],
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["./src/setupTests.ts"],
        include: ["src/**/*.{test,spec}.{ts,tsx}"],
    },
});
