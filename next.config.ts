import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  basePath: "/miao",
  output: "standalone",
};

export default nextConfig;
