import Vue from 'vue';

import VueRouter from 'vue-router';
import Login from '../Login.vue';
import Signup from '../Signup.vue';
import Home from '../Home.vue';
import Profil from '../Profil.vue';
import OnePost from '../OnePost.vue';
import NewPost from '../NewPost.vue';

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
			name: 'Signup',
			component: Signup
		},
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: '/profil',
			name: 'Profil',
			component: Profil
		},
		{
			path: '/add',
			name: 'NewPost',
			component: NewPost
		},
		{
			path: '/:id(\\d+)',
			name: 'OnePost',
			component: OnePost
		},
		{
			path: '*',
			redirect: '/'
		}
	]
});

export default router;
