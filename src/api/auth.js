import axios from 'axios'

const GITHUB = {
	OAUTH_URI: 'https://github.com/login/oauth/authorize',
	REDIRECT_URI: 'http://localhost:8080/login',
	CLIENT_ID: 'a3796679db91112622be'
}

export function loginWithGithub () {
	const state = new Date().getTime()
	const url = `${GITHUB.OAUTH_URI}?client_id=${GITHUB.CLIENT_ID}&redirect_uri=${GITHUB.REDIRECT_URI}&scope=user&state=${state}`
	// const myWindow = window.open(
	// 	url,
	// 	'aqcoder.com-login-github',
	// 	'modal=yes,toolbar=no,titlebar=no,menuba=no,location=no,top=200,left=500,width=600,height=400'
	// )
	// myWindow.focus()

	window.location.href = url
}

export function getUserInfo(code, state) {
	return axios.post('/oAuth/getUserInfo', {
		code: code,
		state: state
	})
}
