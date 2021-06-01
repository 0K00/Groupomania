<template>
	<div id="profil">
		<hide-at breakpoint="mediumAndBelow">
			<aside>
				<div class="menu">
					<h1>Groupomania</h1>
					<User
						alt="profil picture"
						text="Super UX Writer"
						link="https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
					/>
					<Tabbar />
					<div class="trademark">© 2021 · Groupomania · All rights reserved</div>
				</div>
			</aside>
		</hide-at>
		<show-at class="mobile" breakpoint="mediumAndBelow">
			<div class="tabbar">
				<Tabbar size="Mobile" />
			</div>
		</show-at>
		<div class="container">
			<show-at breakpoint="mediumAndBelow">
				<User
					alt="profil picture"
					text="Super UX Writer"
					link="https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
				/>
			</show-at>
			<form id="modify" @submit.prevent="modifyUser()">
				<Input type="text" shape="Square" label="Username" placeholder="John" modifier="Labeled" />
				<Input
					type="text"
					shape="Square"
					label="Job"
					placeholder="Enter your job"
					modifier="Labeled"
				/>
				<Button
					id="btnModify"
					type="submit"
					variant="Secondary"
					size="Large"
					label="Modify your profil"
				/>
			</form>
			<form @submit.prevent="deleteUser()">
				<Button
					id="btnDelete"
					type="submit"
					variant="Delete"
					size="Large"
					label="Delete your profil"
				/>
			</form>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import axios from 'axios';
import '!style-loader!css-loader!sass-loader!./sass/_profil.scss';

import User from './components/User.vue';
import Tabbar from './components/Tabbar.vue';
import Input from './components/Input.vue';
import Button from './components/Button.vue';
import { showAt, hideAt } from 'vue-breakpoints';

export default {
	name: 'Profil',
	components: {
		User,
		Tabbar,
		Input,
		Button,
		hideAt,
		showAt
	},

	methods: {
		deleteUser() {
			axios
				.delete(`http://localhost:3000/api/users/delete`, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${this.$token}`
					}
				})
				.then(localStorage.removeItem('user'))
				.then((location.href = '/'));
		},

		modifyUser() {
			const getUser = JSON.parse(localStorage.getItem('user'));
			const id = getUser.user.id;
			const username = document.getElementById('Username').value;
			const role = document.getElementById('Job').value;
			const isAdmin = false;
			axios
				.put(
					`http://localhost:3000/api/users/update`,
					{
						id,
						username,
						role,
						isAdmin
					},
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${this.$token}`
						}
					}
				)
				.then((location.href = '/'));
		}
	}
};
</script>
