import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Product assets already live in /public. Serving them directly avoids the
    // Vercel Image Optimization endpoint, which returns 402 after the account's
    // optimization allowance is exhausted.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
