import User from '../components/User.vue';

export default {
	title: 'Components/User',
	component: User,
	argTypes: {
		size: { control: { type: 'select', options: ['Small', 'Medium'] } }
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { User },
	template: '<User v-bind="$props" v-on="$props" />'
});

export const Default = Template.bind({});
Default.args = {
	link:
		'https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
	alt: 'Portrait',
	user: 'User',
	text: 'Text'
};
