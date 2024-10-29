import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecation: ["legacy-js-api"]
  }
};

export default nextConfig;
