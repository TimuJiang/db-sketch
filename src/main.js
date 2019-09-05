import Vue from 'vue'
import './api/interceptor'
import router from './router'
import './element-ui'
import './api'
import store from './vuex/store'
import App from './App.vue'
import './components/dialog-factory'
Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
window.Vue = Vue
