export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	backgrounds: {
		default: 'Light',
		values: [
			{
				name: 'Light',
				value: '#FDFDFD'
			}
		]
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};
