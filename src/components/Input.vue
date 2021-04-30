<template>
	<div :class="classes">
		<label :for="label">{{ label }}</label>
		<input type="text" :id="label" :placeholder="placeholder" :value="value" />
	</div>
</template>

<script>
// import '../sass/_input.scss';
import '!style-loader!css-loader!sass-loader!../sass/_input.scss';

export default {
	name: 'Input',

	props: {
		label: {
			type: String,
			required: true
		},
		value: {
			type: String,
			required: false
		},
		placeholder: {
			type: String,
			required: true
		},
		shape: {
			type: String,
			default: 'Rounded',
			validator: function (value) {
				return ['Rounded', 'Square'].indexOf(value) !== -1;
			}
		},
		size: {
			type: String,
			default: 'Medium',
			validator: function (value) {
				return ['Small', 'Medium'].indexOf(value) !== -1;
			}
		},
		modifier: {
			type: String,
			default: 'Unlabeled',
			validator: function (value) {
				return ['Labeled', 'Unlabeled'].indexOf(value) !== -1;
			}
		}
	},

	computed: {
		classes() {
			return {
				input: true,
				[`input-${this.shape}`]: true,
				[`input-${this.size}`]: true,
				[`input-${this.modifier}`]: true
			};
		}
	}
};
</script>
