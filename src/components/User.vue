<template>
	<div :class="classes">
		<Avatar v-bind:class="'avatar-' + size" v-bind:link="link" alt="alt" />
		<div class="user-container">
			<div id="userUsername" class="user-name">{{ user }}</div>
			<div id="userJob" class="user-content">{{ text }}</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
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
	},

	data() {
		const getUser = JSON.parse(localStorage.getItem('user'));
		const token = getUser.token;
		axios
			.get(`http://localhost:3000/api/users/myprofile/`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `${token}`
				}
			})
			.then(response => {
				this.user = response.data.user.username;
				this.text = response.data.user.role;
			});
		return {
			user: [],
			text: []
		};
	}
};
</script>
