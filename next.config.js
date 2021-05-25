module.exports = {
	images: {
		deviceSizes: [500, 1000, 2500, 3000],
		domains: [],
	},
	env: {},
	target: `serverless`,
	sassOptions: {
		prependData: `
			@use "styles/_variables.scss" as var;
			@use "styles/_mixins.scss";
		`,
	},
	webpack: (config, options) => {
		// Inline SVGs
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: `@svgr/webpack`,
					options: {
						svgoConfig: {
							plugins: [
								{ cleanupIDs: false },
								{ prefixIds: false },
								{ moveGroupAttrsToElems: false }
							]
						}
					}
				}
			],

		});

		return config;
	  },
};
