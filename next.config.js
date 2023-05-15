/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'marvel-b1-cdn.bc0a.com',
                port: '',
                pathname: '/f00000000249952/www.ameritfleetsolutions.com/wp-content/themes/unified/images/**'
            }
        ]
    }
}

module.exports = nextConfig
