/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
	reactStrictMode: true,
	images: {
		domains: ["firebasestorage.googleapis.com"],
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push({
			test: /\.pdf$/,
			use: [
				{
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
					},
				},
			],
		});

		// Important: return the modified config
		return config;
	},

	pwa: {
		dest: "public",
		runtimeCaching,
		register: true,
	},
});
