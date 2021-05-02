<template>
	<div :class="classes">
		<Avatar v-bind:class="'avatar-' + size" v-bind:link="link" alt="alt" />
		<div class="user-container">
			<div class="user-name">{{ user }}</div>
			<div class="user-content">{{ text }}</div>
		</div>
	</div>
</template>

<script>
import Avatar from './Avatar.vue';
import '!style-loader!css-loader!sass-loader!../sass/_user.scss';

export default {
	name: 'User',

	components: {
		Avatar
	},

	props: {
		link: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			required: true
		},
		user: {
			type: String,
			required: true
		},
		text: {
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
				user: true,
				[`user-${this.size}`]: true
			};
		}
	}
};
</script>
