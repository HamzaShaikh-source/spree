/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // needed for static export with external images
  },
};

export default nextConfig;
