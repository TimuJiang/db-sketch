<template lang='pug'>
	el-dialog.create-table-dialog(
		:visible.sync="show"
	)
		.dialog-row
			span 表名
			el-input(size="small" autocomplete="off")
		.dialog-row
			span 备注
			el-input(size="small" autocomplete="off")
</template>

<script>
	export default {
		name: 'create-table-dialog',
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
			}
		}
	}
</script>
<style lang="scss" scoped>
	.create-table-dialog {

	}
</style>
