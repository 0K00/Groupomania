module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'storybook-dark-mode',
		'@storybook/addon-a11y',
		'@storybook/addon-storysource',
		{
			name: '@storybook/preset-scss',
			options: {
				cssLoaderOptions: {
					modules: true,
					localIdentName: '[name]__[local]--[hash:base64:5]'
				}
			}
		}
	]
};
