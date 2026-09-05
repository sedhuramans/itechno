/** @type {import('next').NextConfig} */
// Only apply '/itechno' basePath when deploying specifically to GitHub Pages
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'gh-pages';
const basePath = isGitHubPages ? '/itechno' : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

