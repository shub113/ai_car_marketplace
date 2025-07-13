import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsHmrCache: false, // defaults to true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wwemgatcyzmhkhqzaxwd.supabase.co",
      },
    ],
  },
};

export default nextConfig;
