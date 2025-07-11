import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'mshoagiaotiep.com',
      },
      {
        protocol: 'https',
        hostname: 'benative.vn',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
      },
      {
        protocol: 'https',
        hostname: 'stepup.edu.vn',
      },
      {
        protocol: 'https',
        hostname: 'luanvan24.com',
      },
      {
        protocol: 'https',
        hostname: 'astarequivalency.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com'
      }
    ],
  },
};
export default nextConfig;
