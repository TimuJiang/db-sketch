import Vue from 'vue'
import './axios-interceptors'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex/store'
import App from './App.vue'
import './api'
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
