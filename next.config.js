const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["a.storyblok.com"],
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./src"));

    return config;
  },
  reactStrictMode: false,
};
