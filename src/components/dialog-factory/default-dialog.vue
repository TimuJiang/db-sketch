<template lang='pug'>
	el-dialog.default-dialog(:visible.sync='show')
		el-button some
</template>

<script>
	import Base from './base'
	export default {
		extends: Base,
		name: 'default-dialog',
		data() {
			return {

			}
		}
	}
</script>
<style lang="scss" scoped>
	.default-dialog {

	}
</style>
