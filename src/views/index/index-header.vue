<template lang='pug'>
	.index-header
		.index-header__content
			span(v-if="$store.state.user") {{$store.state.user.name}}
			el-link(type="primary" @click="onLogin" v-if="!$store.state.user") 登录
			el-divider(v-if="$store.state.user" direction="vertical")
			el-link(type="primary" @click="onLogout" v-if="$store.state.user") 登出
</template>

<script>
	import { loginWithGithub, logout } from '../../api/auth'
	export default {
		name: 'index-header',
		methods: {
			onLogin() {
				loginWithGithub().then(response => {
					console.log(/response/, response)
				})
			},
			onLogout() {
				logout().then(response => {
					console.log(/response/, response)
					this.$store.commit('user', null)
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.index-header {
		display: flex;
		height: 56px;
		background: #fff;
		border-bottom: 1px solid #f1f1f1;
		color: #909090;

		&__content {
			margin: 0 auto;
			width: 1000px;
			line-height: 56px;
			text-align: right;
		}
	}
</style>
