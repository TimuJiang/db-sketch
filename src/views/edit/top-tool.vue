<template lang='pug'>
	.top-tool
		menu-item(label="返回" @click.native="onChange(0)")
		menu-item(label="新增表" @click.native="onChange(1)")
		menu-item(label="保存" @click.native="onChange(2)")
		menu-item(label="清除" @click.native="onChange(3)")
</template>

<script>
	import MenuItem from './top-tool/menu-item'
	export default {
		name: 'top-tool',
		components: {MenuItem},
		methods: {
			onChange (type) {
				if (type === 1) {
					this.$emit('edit-new')
				} else if (type === 2) {
					this.$emit('edit-save')
				} else if (type === 3) {
					this.$emit('edit-clear')
				}
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
