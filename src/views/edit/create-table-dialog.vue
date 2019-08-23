<template lang='pug'>
	el-dialog.create-table-dialog(
		title="新建表"
		:visible="show"
		width="400px"
		@close="onClose"
	)
		.dialog-row
			span.label 表名
			el-input(v-model="title" size="small" autocomplete="off")
		.dialog-row
			span.label 备注
			el-input(size="small" type="textarea"
				:rows="4"
				placeholder="请输入内容"
				v-model="remark" autocomplete="off")
		span(slot="footer" class="dialog-footer")
			el-button(size="small" @click="onClose") 取 消
			el-button(size="small" type="primary" @click="onSure") 确 定
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
				title: '',
				remark: ''
			}
		},
		methods: {
			onClose() {
				this.title = ''
				this.remark = ''
				this.$emit('close')
			},
			onSure() {
				if (!this.title) {
					this.$message.error('请输入表名')
					return
				}
				this.$emit('sure', {
					title: this.title,
					remark: this.remark
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.create-table-dialog {
		.dialog-row {
			margin-bottom: 10px;
			.label {
				line-height: 30px;
			}
		}
	}
</style>
