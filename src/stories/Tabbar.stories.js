import Tabbar from '../components/Tabbar.vue';

export default {
	title: 'Components/Tabbar',
	component: Tabbar,
	argTypes: {
		size: { control: { type: 'select', options: ['Mobile', 'Desktop'] } }
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Tabbar },
	template: '<Tabbar v-bind="$props" v-on="$props" />'
});

export const Default = Template.bind({});
Default.args = {
	homeLink: '#',
	searchLink: '#',
	addLink: '#',
	profilLink: '#',
	disconnectLink: '#'
};
