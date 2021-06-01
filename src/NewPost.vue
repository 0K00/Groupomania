<template>
	<div id="add">
		<hide-at breakpoint="mediumAndBelow">
			<aside>
				<div class="menu">
					<h1>Groupomania</h1>
					<User
						user="Hamsa Counter"
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
					user="Hamsa Counter"
					text="Super UX Writer"
					link="https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
				/>
			</show-at>
			<form id="modify" @submit.prevent="sendNewPost()">
				<Input type="text" shape="Square" label="Title" placeholder="My Dog" modifier="Labeled" />
				<input @change="uploadImage" type="file" id="Upload" placeholder="placeholder" />
				<Input
					type="text"
					shape="Square"
					label="Content"
					placeholder="This is my dog"
					modifier="Labeled"
				/>
				<Button id="btnModify" type="submit" variant="Primary" size="Large" label="Publish" />
			</form>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import axios from 'axios';
import '!style-loader!css-loader!sass-loader!./sass/_add.scss';

import User from './components/User.vue';
import Tabbar from './components/Tabbar.vue';
import Input from './components/Input.vue';
import Button from './components/Button.vue';
import { showAt, hideAt } from 'vue-breakpoints';

export default {
	name: 'Add',
	components: {
		User,
		Tabbar,
		Input,
		Button,
		hideAt,
		showAt
	},

	data() {
		return {
			selectedFile: null
		};
	},

	methods: {
		uploadImage(event) {
			this.selectedFile = event.target.files[0];
		},

		sendNewPost() {
			const title = document.getElementById('Title').value;
			const content = document.getElementById('Content').value;
			const attachment = new FormData();
			attachment.append('attachement', this.selectedFile, this.selectedFile.name);
			const getUser = JSON.parse(localStorage.getItem('user'));
			const UserId = getUser.user.id;

			axios
				.post(
					`http://localhost:3000/api/posts/new`,
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${this.$token}`
						}
					},
					{
						UserId,
						title,
						content,
						attachment
					}
				)
				.then(res => {
					console.log(res);
				})
				.then((this.visible = false))
				.then(this.$root.$emit('Posts'));
		}
	}
};
</script>
