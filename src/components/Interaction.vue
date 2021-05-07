<template>
	<button class="int">
		<div class="icon-heart"></div>
		<div class="int-value">{{ value }}</div>
	</button>
</template>

<script>
import '!style-loader!css-loader!sass-loader!../sass/_interaction.scss';

export default {
	name: 'Int',

	props: {
		value: {
			type: String,
			required: true
		}
	}
};
</script>
