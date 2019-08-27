import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: () => import('./views/index.vue')
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
