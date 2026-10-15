import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — produces a self-contained `out/` folder
  // that can be hosted on Cloudflare Pages (or any static host).
  output: "export",

  // Trailing slash so every route resolves to a folder/index.html
  // (friendlier on static hosts like Cloudflare Pages).
  trailingSlash: true,

  // next/image's optimizer requires a Node server; disable it for
  // static export. The app uses plain <img> tags anyway.
  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
