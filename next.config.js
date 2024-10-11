const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
      // Add your public URL or any other environment variables here
      PUBLIC_URL: process.env.PUBLIC_URL || 'http://localhost:3000',
    },
    images: {
      domains: ['localhost'],
  },
  };
  
  module.exports = withNextIntl(nextConfig);

  