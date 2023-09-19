/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.webm$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos',
          outputPath: 'static/videos',
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
