import Int from '../components/Interaction.vue';

export default {
	title: 'Components/Interaction',
	component: Int
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Int },
	template: '<Int v-bind="$props" v-on="$props" />'
});

export const Default = Template.bind({});
Default.args = {
	value: '100'
};
