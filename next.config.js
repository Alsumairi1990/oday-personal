/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
      // Add your public URL or any other environment variables here
      PUBLIC_URL: process.env.PUBLIC_URL || 'http://localhost:3000',
    },
  };
  
  module.exports = nextConfig;
  