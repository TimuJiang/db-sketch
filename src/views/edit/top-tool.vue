<template lang='pug'>
	.top-tool
		menu-item(label="新增表" @click.native="onChange(1)")

</template>

<script>
	import MenuItem from './top-tool/menu-item'
	export default {
		name: 'top-tool',
		components: {MenuItem},
		methods: {
			onChange (type) {
				this.$emit('edit-new')
			}
		}
	}
</script>
<style lang="scss" scoped>
	.top-tool {
		display: flex;
		height: 50px;
	}
</style>
