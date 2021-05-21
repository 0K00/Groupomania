import Card from '../components/Card.vue';

export default {
	title: 'Components/Card',
	component: Card,
	argTypes: {
		size: { control: { type: 'select', options: ['Mobile', 'Desktop'] } }
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Card },
	template: '<Card v-bind="$props" v-on="$props" />'
});

export const Default = Template.bind({});
Default.args = {
	avatarLink:
		'https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
	user: 'User',
	text: 'Text',
	value: '100',
	imgLink:
		'https://images.unsplash.com/photo-1620057604592-ceccf0143ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
	desc: 'Text'
};
