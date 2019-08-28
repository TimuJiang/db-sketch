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
			})
		},
		mounted() {
			const { code, state } = this.$route.query
			getUserInfo(code, state)
				.then(data => {
					console.log(data)
					this.$store.commit('user', data.data.data)
					this.$router.replace('/')
				})
		}
	}
</script>
<style lang="scss" scoped>

</style>
