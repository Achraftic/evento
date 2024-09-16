/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol: "https",
            hostname:"nextui.org"
        },
        {
            protocol:"https",
            hostname:"images.unsplash.com"
        }
    
    ]
    }
}

module.exports = nextConfig
