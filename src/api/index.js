import Vue from 'vue'
const context = require.context('/', false, /\.(api.js)$/)
console.log(context.keys())
const apis = {}
context.keys().forEach(name => {
	let key = name.replace(/^\.\//, '').replace(/\.(api.js)$/, '')
	apis[key] = context(name)
})
Vue.prototype.$api = apis
