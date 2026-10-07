import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [{ source: "/", destination: "/es", permanent: false }];
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
