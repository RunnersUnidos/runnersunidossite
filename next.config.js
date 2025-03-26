const createNextIntlPlugin = require('next-intl/plugin');
const withVideos = require('next-videos');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'images.pexels.com',
      'runnerunidos.s3.us-east-2.amazonaws.com',
      'beerunevent.s3.amazonaws.com',
      'diademuertosevent.s3.amazonaws.com',
      'galleryevent.s3.amazonaws.com',
    ],
  },
  env: {
    _next_intl_trailing_slash: '',
  },
};

// Apply next-intl first, then next-videos
module.exports = withVideos(withNextIntl(nextConfig));
