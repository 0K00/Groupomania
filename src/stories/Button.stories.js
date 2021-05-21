import Button from '../components/Button.vue';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		variant: { control: { type: 'select', options: ['Primary', 'Secondary', 'Delete', 'Blank'] } },
		size: { control: { type: 'select', options: ['Small', 'Medium', 'Large'] } }
	},
	parameters: {
		docs: {
			description: {
				component:
					'A core interaction element to signify actions a user can take. We used three different button sizes. We primarily use the medium size across most of the app. The large and small versions are used dependent on context. We currently have 4 different variations to communicate intent to the user.'
			}
		}
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
