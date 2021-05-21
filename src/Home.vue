<template>
	<div id="home">
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
		<hide-at breakpoint="mediumAndBelow">
			<main>
				<Input />
				<div class="card-container">
					<Card
						value="100"
						user="Hamsa Counter"
						text="14/01/2023"
						desc="Cars"
						avatarLink="https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
						imgLink="https://images.unsplash.com/photo-1620057604592-ceccf0143ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
					/>
					<Card
						value="100"
						user="Hamsa Counter"
						text="14/01/2023"
						desc="Cars"
						avatarLink="https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
						imgLink="https://images.unsplash.com/photo-1620057604592-ceccf0143ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
					/>
				</div>
			</main>
		</hide-at>
		<show-at breakpoint="mediumAndBelow">
			<main>
				<div class="tabbar">
					<Tabbar size="Mobile" />
				</div>
				<div class="card-container">
					<h1>Groupomania</h1>
					<Card
						size="Mobile"
						value="100"
						user="Hamsa Counter"
						text="14/01/2023"
						desc="Cars"
						avatarLink="https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
						imgLink="https://images.unsplash.com/photo-1620057604592-ceccf0143ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
					/>
					<Card
						size="Mobile"
						value="100"
						user="Hamsa Counter"
						text="14/01/2023"
						desc="Cars"
						avatarLink="https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
						imgLink="https://images.unsplash.com/photo-1620057604592-ceccf0143ee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
					/>
				</div>
			</main>
		</show-at>
		<router-view></router-view>
	</div>
</template>

<script>
import '!style-loader!css-loader!sass-loader!./sass/_home.scss';

import User from './components/User.vue';
import Tabbar from './components/Tabbar.vue';
import Input from './components/Input.vue';
import Card from './components/Card.vue';
import { showAt, hideAt } from 'vue-breakpoints';

export default {
	name: 'Home',
	components: {
		User,
		Tabbar,
		Input,
		Card,
		hideAt,
		showAt
	}
};
</script>
