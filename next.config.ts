import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "anadoluasiretlerfederasyonu.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "anadoluasiretlerfederasyonu.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
