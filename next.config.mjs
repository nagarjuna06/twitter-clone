/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
      },
      {
        hostname: "twitter-storage.s3.ap-south-1.amazonaws.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
