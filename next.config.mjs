/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ik.imagekit.io",
                port: "",
            },
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;