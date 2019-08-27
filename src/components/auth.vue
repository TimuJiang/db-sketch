<template lang='pug'>
	.auth
</template>

<script>
	import { loginWithGithub } from '../api/auth'
	export default {
		name: 'auth',
		methods: {
			loginWithGithub() {
				loginWithGithub().then(response => {

				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.auth {

	}
</style>
