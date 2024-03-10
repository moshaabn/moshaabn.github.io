/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  experimental: {
    esmExternals: true,
    outputFileTracing: true,
  },
};

export default nextConfig;
