/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: `npm run build` writes the whole site to ./out
  output: "export",
  // /product -> /product/index.html, which S3/CloudFront and most static hosts serve cleanly.
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
