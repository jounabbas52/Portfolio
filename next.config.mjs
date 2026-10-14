/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root so Turbopack ignores the stray lockfile in the parent
  // directory (D:\Projects\cv) which sits outside this git repo.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
