import axios from 'axios'

export function post (url, data, params) {
	return new Promise((resolve, reject) => {
		axios
			.post(url, data)
			.then(res => {
				let subCode = res.data.code.split('-').pop()
				if (subCode === 'success') {
					resolve(res.data.data || {})
				} else {
					reject(res.data.data)
				}
			})
			.catch(error => {
				reject(error)
			})
	})
}
