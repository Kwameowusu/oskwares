/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
	reactStrictMode: true,
	images: {
		domains: ["firebasestorage.googleapis.com"],
	},

	pwa: {
		dest: "public",
		runtimeCaching,
		register: true,
	},
});
