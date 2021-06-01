<template>
	<div :class="classes">
		<Tab v-bind:icons="'home'" link="home" text="Home" />
		<Tab v-bind:icons="'search'" link="search" text="Search" />
		<Tab v-bind:icons="'plus'" link="add" text="Add" />
		<Tab v-bind:icons="'user'" link="profil" text="Profil" />
		<Tab v-bind:icons="'logout'" link="logout" text="Disconnect" />
	</div>
</template>

<script>
import Tab from './Tab.vue';
import '!style-loader!css-loader!sass-loader!../sass/_tabbar.scss';

export default {
	name: 'Tabbar',

	components: {
		Tab
	},

	props: {
		size: {
			type: String,
			default: 'Desktop',
			validator: function (value) {
				return ['Mobile', 'Desktop'].indexOf(value) != -1;
			}
		}
	},

	computed: {
		classes() {
			return {
				tabbar: true,
				[`tabbar-${this.size}`]: true
			};
		}
	}
};
</script>
