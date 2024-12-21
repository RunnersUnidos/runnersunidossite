const createNextIntlPlugin = require('next-intl/plugin');
const withVideos = require('next-videos');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const baseConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['images.pexels.com', 'runnerunidos.s3.us-east-2.amazonaws.com'],
  },
};

// Apply next-intl first, then next-videos
module.exports = withVideos(withNextIntl(baseConfig));
