const PHASE_DEVELOPMENT_SERVER = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
	/**
	 * @type {import('next').NextConfig}
	 */
	const nextConfig = {
		...defaultConfig,
		env: {
			BASE_DOMAIN: 'https://doitsu.tech',
			POSTS_API: 'https://posts_api.doitsu.tech'
		},
		i18n: {
			locales: ['default', 'en', 'vi'],
			defaultLocale: 'default',
			localeDetection: false
		}
	}

	if (phase === PHASE_DEVELOPMENT_SERVER) {
		nextConfig.env.BASE_DOMAIN = 'http://localhost:3000';
		nextConfig.env.POSTS_API = 'http://localhost:3001';
	}

	return nextConfig;
}