import Tab from '../components/Tab.vue';

export default {
	title: 'Components/Tab',
	component: Tab,
	argTypes: {
		size: { control: { type: 'select', options: ['Mobile', 'Desktop'] } },
		icons: {
			control: {
				type: 'select',
				options: [
					'home',
					'search',
					'plus',
					'user',
					'logout',
					'heart',
					'comment',
					'cancel',
					'angle-right'
				]
			}
		}
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Tab },
	template: '<Tab v-bind="$props" v-on="$props" />'
});

export const Default = Template.bind({});
Default.args = {
	link: '#',
	text: 'Text'
};
