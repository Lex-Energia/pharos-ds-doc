import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@pharos-ds/core',
    '@pharos-ds/theme-pharos',
    '@pharos-ds/cli',
  ],
};

export default nextConfig;
