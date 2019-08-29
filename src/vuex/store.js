import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: null
	},

	mutations: {
		'user' (state, value) {
			state.user = value
		}
	},
	getters: {
		'user' (state) {
			return state.user
		}
	}
})