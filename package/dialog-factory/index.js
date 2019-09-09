import Vue from 'vue'

const componentMap = {}
const dialogFactory = {
	register(name, component) {
		Vue.component(name, component)
		componentMap[name] = Vue.component(name)
	},
	open(name, data) {
		const Instance = componentMap[name]
		let instance = new Instance()
		console.log(instance)
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
