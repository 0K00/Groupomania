export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	grid: {
		cellSize: 24
	},
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
