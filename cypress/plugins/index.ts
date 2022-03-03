import path from "path";
import { startDevServer } from "@cypress/vite-dev-server";

module.exports = (on, config) => {
    on("dev-server:start", async (options) => {
        return startDevServer({
            options,
            viteConfig: {
                configFile: path.resolve(
                    __dirname,
                    "..",
                    "..",
                    "vite.config.ts"
                ),
            },
        });
    });

    return config;
};
