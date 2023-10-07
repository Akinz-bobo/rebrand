/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "example.com"],
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
