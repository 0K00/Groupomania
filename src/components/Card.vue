<template>
	<div :class="classes">
		<User v-bind:link="avatarLink" v-bind:user="user" v-bind:text="text" />
		<div class="card-img">
			<img :src="imgLink" alt="" />
		</div>
		<div class="card-content">{{ desc }}</div>
		<Int v-bind:value="value" />
	</div>
</template>

<script>
import User from './User.vue';
import Int from './Interaction.vue';
import '!style-loader!css-loader!sass-loader!../sass/_card.scss';

export default {
	name: 'Card',

	components: {
		User,
		Int
	},

	props: {
		avatarLink: {
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
		value: {
			type: Number,
			required: true
		},
		imgLink: {
			type: String,
			required: true
		},
		desc: {
			type: String,
			required: true
		},
		size: {
			type: String,
			default: 'Desktop',
			validator: function (value) {
				return ['Mobile', 'Desktop'].indexOf(value) !== -1;
			}
		}
	},

	computed: {
		classes() {
			return {
				card: true,
				[`card-${this.size}`]: true
			};
		}
	}
};
</script>
