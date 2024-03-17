const hostnames = [
  "redbiller.com",
  "api.jochebedapps.com",
  "api.live.redbiller.com",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
