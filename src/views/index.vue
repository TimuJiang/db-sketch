<template lang='pug'>
	.index
		index-header
		.index__centent
			.db-sketch-row
				el-button(type="primary" round @click="goDbSketch") db-sketch
				el-button(type="primary" round @click="goTest") test

</template>

<script>
	import IndexHeader from './index/index-header'

	export default {
		name: 'index',
		components: {
			IndexHeader
		},
		methods: {
			goDbSketch() {
				if (this.$store.state.user) {
					// todo 已登录 直接进入
					this.$router.push('/project-list')
				} else {
					// todo 选择登录方式
					this.$message.info('未登录，需要先登录')
				}
			},
			goTest () {
				this.$dialogFactory.open({some: 1})
					.then(result => {
						console.log(result)
					})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.index {
		.db-sketch-row {
			height: 300px;
			width: 1000px;
			margin: 0 auto;
		}
	}
</style>
