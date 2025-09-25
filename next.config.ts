import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tanstack.com",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
