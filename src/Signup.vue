<template>
	<div class="signup" id="signup">
		<h1 class="text-h2">Groupomania</h1>
		<div class="container">
			<h2 class="text-h3">Create Account</h2>
			<form id="signup" @submit.prevent="signup()">
				<Input type="text" shape="Square" label="Username" placeholder="John" modifier="Labeled" />
				<Input
					type="text"
					shape="Square"
					label="Email"
					placeholder="exemple@mail.com"
					modifier="Labeled"
				/>
				<Input type="text" shape="Square" label="Job" placeholder="Developper" modifier="Labeled" />
				<Input
					type="password"
					shape="Square"
					label="Password"
					placeholder="Enter your password"
					modifier="Labeled"
				/>
				<Input
					type="password"
					shape="Square"
					label="PasswordVerif"
					placeholder="Enter your password"
					modifier="Labeled"
				/>
				<Button id="btnSignup" type="submit" size="Large" label="Sign Up" />
			</form>
			<router-link class="text-m text-gray-50 text-not_underline" to="/">Sign in</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import axios from 'axios';
import '!style-loader!css-loader!sass-loader!./sass/_signup.scss';

import Input from './components/Input.vue';
import Button from './components/Button.vue';
import { showAt, hideAt } from 'vue-breakpoints';

export default {
	name: 'Signup',
	components: {
		Input,
		Button,
		hideAt,
		showAt
	},
	data() {
		return {
			message: 'hello'
		};
	},
	methods: {
		signup() {
			const username = document.getElementById('Username').value;
			const password = document.getElementById('Password').value;
			const passwordVerif = document.getElementById('PasswordVerif').value;
			const email = document.getElementById('Email').value;
			const role = document.getElementById('Job').value;
			if (password === passwordVerif) {
				axios
					.post(
						'http://localhost:3000/api/users/signup',
						{
							username,
							password,
							email,
							role
						},
						{
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
					.then(res => {
						if (res.status === 201) {
							location.href = '/';
						}
					})
					.catch(error => {
						if (error.response.status === 401) {
							this.message = 'Email not available.';
						}
					});
				console.log(username);
			} else if (password != passwordVerif) {
				this.message = 'Check the password.';
			}
		}
	}
};
</script>
