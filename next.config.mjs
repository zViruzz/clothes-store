/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'acdn.mitiendanube.com',
			},
			{
				protocol: 'https',
				hostname: 'littleparadise.com.ar',
			},
			{
				protocol: 'https',
				hostname: 'lulabim.com.ar',
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'th.bing.com',
			},
			{
				protocol: 'https',
				hostname: 'd21nqc4dc5vxc4.cloudfront.net',
			},
		],
	},
}

export default nextConfig
