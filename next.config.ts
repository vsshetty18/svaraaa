import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
    resolveAlias: {
      canvas: "./empty-module.ts",
    },
  },
};

export default nextConfig;
