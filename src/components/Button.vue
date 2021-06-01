<template>
	<button :type="type" :id="id" :class="classes">{{ label }}</button>
</template>

<script>
// import '../sass/_button.scss';
import '!style-loader!css-loader!sass-loader!../sass/_button.scss';

export default {
	name: 'Button',

	props: {
		label: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		id: {
			type: String,
			required: true
		},
		variant: {
			type: String,
			default: 'Primary',
			validator: function (value) {
				return ['Primary', 'Secondary', 'Delete', 'Blank'].indexOf(value) !== -1;
			}
		},
		size: {
			type: String,
			default: 'Medium',
			validator: function (value) {
				return ['Small', 'Medium', 'Large'].indexOf(value) !== -1;
			}
		}
	},

	computed: {
		classes() {
			return {
				btn: true,
				[`btn-${this.variant}`]: true,
				[`btn-${this.size}`]: true
			};
		}
	}
};
</script>
