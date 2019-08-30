import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
			name: 'login-menu',
			component: () => import('./views/login-menu.vue')
		},
		{
			path: '/login',
			name: 'auth',
			component: () => import('./views/auth.vue')
		},
		{
			path: '/project-list',
			name: 'project-list',
			component: () => import('./views/project-list.vue')
		},
		{
			path: '/edit/:id',
			name: 'edit',
			component: () => import('./views/edit.vue')
		}
	]
})
