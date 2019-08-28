import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// const context = require.context('./layout', false, /\.(route.js)$/)
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'index',
			component: () => import('./views/index.vue')
		},
		{
			path: '/login-menu',
			name: 'auth',
			component: () => import('./views/login-menu.vue')
		},
		{
			path: '/login',
			name: 'auth',
			component: () => import('./views/auth.vue')
		},
		{
			path: '/list',
			name: 'list',
			component: () => import('./views/list.vue')
		},
		{
			path: '/edit/:id?',
			name: 'edit',
			component: () => import('./views/edit.vue')
		}
	]
})
