<template lang='pug'>
	el-dialog.default-dialog(:visible.sync='show')
		slot
</template>

<script>
	import Base from './base'
	export default {
		extends: Base,
		name: 'dialog-wrap',
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
