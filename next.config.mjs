/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "yt3.ggpht.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
