import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"]
  },
  images: {
    deviceSizes: [375, 689, 768, 1234]
  }
};

export default nextConfig;
