// @ts-check

import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  environments: {
    client: {
      source: {
        entry: { index: "./client/index.js" },
      },
      output: {
        distPath: { root: "./dist/client" },
      },
    },
    server: {
      source: {
        entry: { index: "./server/index.js" },
      },
      output: {
        target: "node",
        distPath: { root: "./dist/server" },
      },
    },
  },
});
