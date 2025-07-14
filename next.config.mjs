// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://buy.paddle.com https://sandbox-checkout.paddle.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
