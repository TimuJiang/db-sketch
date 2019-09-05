import DefaultDialog from './default-dialog'

import Vue from 'vue'
console.log(DefaultDialog)
Vue.component('default-dialog', DefaultDialog)
const Instance = Vue.component('default-dialog')

const dialogFactory = {
	register() {
		Vue.component('default-dialog', DefaultDialog)
	},
	open(data) {
		let instance = new Instance()
		instance.$mount()
		const p = instance.open(data)
		document.body.appendChild(instance.$el)
		instance.$children[0].$on('close', () => {
			document.body.removeChild(instance.$el)
			instance.$destroy()
		})
		return p
	}
}
Vue.prototype.$dialogFactory = dialogFactory
