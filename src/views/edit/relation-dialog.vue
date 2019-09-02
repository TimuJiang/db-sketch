<template lang='pug'>
	el-dialog.relation-dialog(
		title="字段关联类型"
		:visible="show"
		width="280px"
		@close="onClose"
		@mousedown.native.stop="onStop"
	)
		.dialog-row
			el-select(v-model="type" size="mini" placeholder="选择关联类型")
				el-option(
					v-for="type in _types"
					:key="type"
					:label="type"
					:value="type")
		span(slot="footer" class="dialog-footer")
			el-button(size="small" @click="onClose") 取 消
			el-button(size="small" type="primary" @click="onSure") 确 定
</template>

<script>
	export default {
		name: 'relation-dialog',
		beforeCreate() {
			this._types = [
				'1-1',
				'1-N',
				'N-1',
				'N-N'
			]
		},
		data() {
			return {
				type: '',
				show: false,
				resolve: '',
				reject: ''
			}
		},
		methods: {
			open(value) {
				this.type = value
				this.show = true
				return new Promise((resolve, reject) => {
					this.resolve = resolve
					this.reject = reject
				})
			},
			onClose () {
				this.show = false
				this.reject()
			},
			onSure () {
				this.resolve(this.type)
				this.show = false
			},
			onStop() {}
		}
	}
</script>
<style lang="scss" scoped>
	.relation-dialog {

	}
</style>
