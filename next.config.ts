import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-d7fc7e0204644a99b00264cba5e82690.r2.dev",
      },
    ],
  },
};

export default nextConfig;
