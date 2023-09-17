/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{

        domains :["images.unsplash.com","www.google.com"]
    }
}


module.exports = nextConfig

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'images.unsplash.com',
//           port: '',
//           pathname: '/account123/**',
//         },
//       ],
//     },
//   }
