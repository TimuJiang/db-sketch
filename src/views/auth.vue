<template lang='pug'>
	.auth
</template>

<script>
	import { getUserInfo } from '../api/auth'
	export default {
		name: 'auth',
		beforeRouteEnter(to, from, next) {
			next(vm => {
				const code = to.query.code
				const state = to.query.state
				getUserInfo(code, state)
					.then(data => {
						console.log(data)
						next()
					})
			})
		},
		mounted() {
		}
	}
</script>
<style lang="scss" scoped>

</style>
