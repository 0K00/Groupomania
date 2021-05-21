<template>
	<div class="login" id="login">
		<h1 class="text-h2">Groupomania</h1>
		<div class="container">
			<h2 class="text-h3">Welcome Back</h2>
			<Input
				type="text"
				shape="Square"
				modifier="Labled"
				label="Email"
				placeholder="exemple@mail.com"
			/>
			<Input
				type="password"
				shape="Square"
				modifier="Labled"
				label="Password"
				placeholder="Enter your password"
			/>
			<Button size="Large" label="Sign In" />
			<router-link class="text-m text-gray-50 text-not_underline" to="signup">Sign up</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
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
	}
};
</script>
