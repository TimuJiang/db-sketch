<template lang='pug'>
	el-dialog.default-dialog(:visible.sync='show')
		el-button demo
</template>

<script>
	import Base from '../../package/dialog-factory/base'
	export default {
		extends: Base,
		name: 'login-dialog'
	}
</script>
<style lang="scss" scoped>
	.login-dialog {

	}
</style>
