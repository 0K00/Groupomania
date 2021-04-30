<template>
	<div :class="classes">{{ label }}</div>
</template>

<script>
// import '../sass/_tag.scss';
import '!style-loader!css-loader!sass-loader!../sass/_tag.scss';

export default {
	name: 'Tag',

	props: {
		label: {
			type: String,
			required: true
		},
		variant: {
			type: String,
			default: 'Default',
			validator: function (value) {
				return ['Default', 'Positive', 'Negative'].indexOf(value) !== -1;
			}
		}
	},

	computed: {
		classes() {
			return {
				tag: true,
				[`tag-${this.variant}`]: true
			};
		}
	}
};
</script>
