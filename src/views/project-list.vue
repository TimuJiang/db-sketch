<template lang='pug'>
	.project-list
</template>

<script>
	export default {
		name: 'project-list',
		mounted() {
			this.load()
		},
		methods: {
			load() {
				this.$api.project.get()
					.then(data => {
						console.log(data)
					})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.project-list {

	}
</style>
