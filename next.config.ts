import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [{ source: "/", destination: "/es", permanent: true }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  images: {
    // Next's default deviceSizes jumps from 384 to 640, so a ~300-420px
    // mobile card gets served the 640w bucket. Fill that gap.
    deviceSizes: [420, 480, 540, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
