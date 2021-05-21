import Vue from 'vue';

import VueRouter from 'vue-router';
import App from './App.vue';
import Login from './Login.vue';
import Home from './Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/signup',
			name: 'Home',
			component: Home
		}
	]
});

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
