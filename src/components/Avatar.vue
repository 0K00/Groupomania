<template>
	<div :class="classes">
		<img :src="link" :alt="alt" />
	</div>
</template>

<script>
import '!style-loader!css-loader!sass-loader!../sass/_avatar.scss';

export default {
	name: 'Avatar',

	props: {
		link: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			required: true
		},
		size: {
			type: String,
			default: 'Medium',
			validator: function (value) {
				return ['Small', 'Medium'].indexOf(value) !== -1;
			}
		}
	},

	computed: {
		classes() {
			return {
				avatar: true,
				[`avatar-${this.size}`]: true
			};
		}
	}
};
</script>
