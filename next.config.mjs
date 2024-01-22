/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            'media.graphassets.com',
            'url.s3.amazonaws.com',
        ]
    }
    // images: {
    //     domains: ["res.cloudinary.com"],
    //     remotePatterns: [
    //         {
    //             protocol: "https",
    //             hostname: "**",
    //         },
    //     ],
    // },
};

export default nextConfig;
