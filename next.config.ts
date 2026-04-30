import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export", // Bắt buộc để xuất ra HTML tĩnh
  images: {
    unoptimized: true, // GitHub Pages không hỗ trợ tối ưu ảnh tự động của Next.js
  },
  basePath: "/TuongVyPortfolio",
};

export default nextConfig;
