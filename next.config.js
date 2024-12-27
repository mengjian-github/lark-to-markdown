/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 由于使用了 @uiw/react-md-editor，需要配置 webpack
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    domains: [
      'bytedance.larkoffice.com',
      'bytedance.feishu.cn',
      'feishu.cn',
      'sf3-cn.feishucdn.com',
      'lf3-static.bytednsdoc.com',
      'p3-hera.byteimg.com',
    ],
  },
}

module.exports = nextConfig 