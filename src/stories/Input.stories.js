import Input from '../components/Input.vue';

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		shape: { control: { type: 'select', options: ['Rounded', 'Square'] } },
		size: { control: { type: 'select', options: ['Small', 'Medium'] } },
		modifier: { control: { type: 'select', options: ['Labled', 'Unlabeled'] } }
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Input },
	template: '<Input v-bind="$props" v-on="$props" />'
});

export const Default = Template.bind({});
Default.args = {
	label: 'Label',
	placeholder: 'Input',
	value: 'Input'
};
