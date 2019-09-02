<template lang='pug'>
	el-dialog.add-field-dialog(
		title="添加字段"
		:visible="show"
		width="340px"
		@close="onClose"
		@mousedown.native.stop="onStop"
	)
		el-row.dialog-row(:gutter="20")
			el-col(:span="12")
				el-input(v-model="name" size="small" autocomplete="off" placeholder="请输入字段名")
			el-col(:span="12")
				el-select(v-model="type" size="small" placeholder="请选择字段类型")
					el-option(
						v-for="type in _types"
						:key="type"
						:label="type"
						:value="type")
		.dialog-row
			el-checkbox(v-model="primaryKey") 主键
			el-checkbox(v-model="isIndex") 索引
		.dialog-row
			el-input(v-model="remark" size="small" autocomplete="off" placeholder="请输入字段说明")
		span(slot="footer" class="dialog-footer")
			el-button(size="small" @click="onClose") 取 消
			el-button(size="small" type="primary" @click="onSure") 确 定
</template>

<script>
	import { FieldTypes } from './base/config'
	export default {
		name: 'add-field-dialog',
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		beforeCreate() {
			this._types = FieldTypes
		},
		data() {
			return {
				name: '',
				remark: '',
				type: '',
				primaryKey: false,
				isIndex: false
			}
		},
		methods: {
			onClose() {
				this.name = ''
				this.remark = ''
				this.type = ''
				this.primaryKey = false
				this.isIndex = false
				this.$emit('close')
			},
			onSure() {
				if (!this.name) {
					this.$message.error('请输入字段名')
					return
				}
				if (!this.type) {
					this.$message.error('请输入字段名')
					return
				}
				this.$emit('sure', {
					name: this.name,
					remark: this.remark,
					type: this.type,
					primaryKey: this.primaryKey,
					isIndex: this.isIndex
				})
			},
			onStop() {}
		}
	}
</script>
<style lang="scss" scoped>
	.add-field-dialog {
		.dialog-row {
			margin-bottom: 10px;
			.label {
				line-height: 30px;
			}
		}
	}
</style>
