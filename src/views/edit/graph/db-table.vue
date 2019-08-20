<template lang='pug'>
	.db-table(:id="node.id" :style="{left: `${node.x}px`, top: `${node.y}px`}")
		.db-table_title
			.name 我得表格
			.toolbar
				i.icon-button.el-icon-edit-outline
		.db-table_content
			db-field(v-for="field,index in node.fields" :key="index" :field="field")
</template>

<script>
	import GraphStore from '../base/graph-store'
	import DbField from './db-field'
	export default {
		name: 'db-table',
		props: [ 'node' ],
		components: { DbField },
		data() {
			return {
				draggable: false
			}
		},
		mounted() {
			this.$nextTick(() => {
				GraphStore.getInstance().initTable(this.$el, this.node.id)
				this.node.fields.forEach(field => {
					let el = document.querySelector(`#${field.id}`)
					GraphStore.getInstance().addToTable(this.node.id, el)
					GraphStore.getInstance().makeSource(el)
				})
			})
		},
		methods: {
			onSetMove(type) {

			}
		}
	}
</script>
<style lang="scss" scoped>
	.db-table {
		position: absolute;
		width: 240px;
		background: #e2e2e2;
		box-shadow: 0 0 3px rgba(0,0,0, 0.2);
		user-select: none;
		font-size: 12px;
		border-radius: 5px;
		overflow: hidden;
		&_title {
			height: 30px;
			padding: 0 5px;
			line-height: 30px;
			background: #42b983;
			color: #ffffff;
			font-size: 14px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.toolbar {
				.icon-button {
					cursor: pointer;
					font-size: 14px;
				}
			}
		}
	}
</style>
