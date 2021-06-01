<template>
	<div class="login" id="login">
		<h1 class="text-h2">Groupomania</h1>
		<div class="container">
			<h2 class="text-h3">Welcome Back</h2>
			<form id="signin" @submit.prevent="signin()">
				<Input type="text" shape="Square" label="Email" placeholder="exemple@mail.com" />
				<Input type="password" shape="Square" label="Password" placeholder="Enter your password" />
				<Button type="submit" id="btnSignIn" size="Large" label="Sign In" />
			</form>
			<router-link class="text-m text-gray-50 text-not_underline" to="signup">Sign up</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import axios from 'axios';
import '!style-loader!css-loader!sass-loader!./sass/_login.scss';

import Input from './components/Input.vue';
import Button from './components/Button.vue';
import { showAt, hideAt } from 'vue-breakpoints';

export default {
	name: 'Login',
	components: {
		Input,
		Button,
		hideAt,
		showAt
	},
	data() {
		return {
			message: ''
		};
	},
	methods: {
		signin() {
			const password = document.getElementById('Password').value;
			const email = document.getElementById('Email').value;
			axios
				.post(
					'http://localhost:3000/api/users/login',
					{
						email,
						password
					},
					{
						headers: {
							'Content-Type': 'application/json'
						}
					}
				)
				.then(res => {
					localStorage.setItem('user', JSON.stringify(res.data));
					location.href = '/home';
				})
				.catch(error => {
					if (error.response.status === 404) {
						this.message = 'Unknown user.';
					}
					if (error.response.status === 401) {
						this.message = 'Invalid email or password.';
					}
					if (error.response.status === 500) {
						this.message = 'Server Error.';
					}
				});
		}
	}
};
</script>
