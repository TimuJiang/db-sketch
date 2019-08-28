<template lang='pug'>
	.index-header
		.index-header__content
			el-link(type="primary" @click="onLogin") 登录
			el-divider(direction="vertical")
			el-link(type="primary" @click="onLogout") 登出
			el-divider(direction="vertical")
			el-link(type="primary" @click="onSend") test
</template>

<script>
	import { loginWithGithub, logout } from '../../api/auth'
	import { create } from '../../api/project'
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
				})
			},
			onSend() {
				create().then(response => {
					console.log(response)
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
