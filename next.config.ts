import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 2678400,
    formats: ["image/webp"],
    remotePatterns: [],
    localPatterns: [
      { pathname: "/images/**" },
      { pathname: "/_next/static/media/**" },
    ],
    qualities: [75],
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
