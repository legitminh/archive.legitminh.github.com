import type { NextConfig } from "next";

// Detect BASE_PATH from environment for building to a subpath (e.g. GitHub Pages archive)
const rawBase = process.env.BASE_PATH ?? '';
let normalizedBase = '';
if (rawBase && rawBase !== '/') {
  normalizedBase = rawBase.startsWith('/') ? rawBase : `/${rawBase}`;
  if (normalizedBase.endsWith('/')) normalizedBase = normalizedBase.slice(0, -1);
}

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',
  // Only set basePath/assetPrefix when a non-empty base is provided
  ...(normalizedBase ? { basePath: normalizedBase, assetPrefix: normalizedBase } : {}),
  // Use trailingSlash so exported pages become e.g. /archive.legitminh.github.com/about/index.html
  trailingSlash: true
};

export default nextConfig;
