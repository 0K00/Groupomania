import Tag from '../components/Tag.vue';

export default {
	title: 'Components/Tag',
	component: Tag,
	argTypes: {
		variant: { control: { type: 'select', options: ['Default', 'Positive', 'Negative'] } }
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { tag: Tag },
	template: '<tag v-bind="$props" v-on="$props" />'
});

export const Default = Template.bind({});
Default.args = {
	label: 'Label'
};
