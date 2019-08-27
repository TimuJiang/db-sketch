<template lang='pug'>
	.index-header
		.index-header__content
			el-link(type="primary" @click="onLogin") 登录
</template>

<script>
	import { loginWithGithub } from '../../api/auth'
	export default {
		name: 'index-header',
		methods: {
			onLogin() {
				loginWithGithub().then(response => {
					console.log(/response/, response)
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
			line-height: 50px;
			text-align: right;
		}
	}
</style>
