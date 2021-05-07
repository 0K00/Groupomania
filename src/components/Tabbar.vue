<template>
	<div :class="classes">
		<Tab v-bind:icons="'home'" v-bind:link="homeLink" text="Home" />
		<Tab v-bind:icons="'search'" v-bind:link="searchLink" text="Search" />
		<Tab v-bind:icons="'plus'" v-bind:link="addLink" text="Add" />
		<Tab v-bind:icons="'user'" v-bind:link="profilLink" text="Profil" />
		<Tab v-bind:icons="'logout'" v-bind:link="disconnectLink" text="Disconnect" />
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
		homeLink: {
			type: String,
			required: true
		},
		searchLink: {
			type: String,
			required: true
		},
		addLink: {
			type: String,
			required: true
		},
		profilLink: {
			type: String,
			required: true
		},
		disconnectLink: {
			type: String,
			required: true
		},
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
