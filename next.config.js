/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pbs.twimg.com',
				port: '',
				pathname: '/profile_images/**',
			},
		],
	},
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
