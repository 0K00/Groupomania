<template>
	<router-link :to="link" :class="classes">
		<div :class="'icon-' + icons"></div>
		<div class="tab-text">{{ text }}</div>
	</router-link>
</template>

<script>
import '!style-loader!css-loader!sass-loader!../sass/_tab.scss';

export default {
	name: 'Tab',

	props: {
		link: {
			type: String,
			required: true
		},
		text: {
			type: String,
			require: true
		},
		icons: {
			type: String,
			default: 'home',
			validator: function (value) {
				return (
					[
						'home',
						'search',
						'plus',
						'user',
						'logout',
						'heart',
						'comment',
						'cancel',
						'angle-right'
					].indexOf(value) !== -1
				);
			}
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
				tab: true,
				[`tab-${this.size}`]: true
			};
		}
	}
};
</script>
