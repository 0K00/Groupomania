import Button from '../components/Button.vue';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		variant: { control: { type: 'select', options: ['Primary', 'Secondary', 'Delete', 'Blank'] } },
		size: { control: { type: 'select', options: ['Small', 'Medium', 'Large'] } }
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { btn: Button },
	template: '<btn v-bind="$props" v-on="$props" />'
});

export const Default = Template.bind({});
Default.args = {
	label: 'Label'
};
