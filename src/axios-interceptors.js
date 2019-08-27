import axios from 'axios'

axios.interceptors.request.use(config => {
	return config
}, error => {
	return Promise.reject(error)
})

// 请求到结果的拦截处理
axios.interceptors.response.use(response => {
	let code = response.data.code
	if (code === 'user-not-login') {

	}
	return response
}, error => {
	return Promise.reject(error)
})

export default axios
