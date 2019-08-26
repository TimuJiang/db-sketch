<template lang='pug'>
	.db-table(:id="node.id" :style="{left: `${node.x}px`, top: `${node.y}px`}")
		.db-table_title
			.name {{ node.label }}
			.toolbar
				i.icon-button.el-icon-edit-outline
				i.icon-button.el-icon-plus(@click="showAddField")
		ul.db-table_content
			db-field(v-for="field,index in node.fields" :key="field.id" :field="field" @delete="onDeleteField")
		add-field-dialog(:show="showAdd" @close="onClose" @sure="onSure")
</template>

<script>
	import AddFieldDialog from '../add-field-dialog'
	import GraphStore from '../base/graph-store'
	import DbField from './db-field'
	export default {
		name: 'db-table',
		props: [ 'node' ],
		components: { DbField, AddFieldDialog },
		data() {
			return {
				draggable: false,
				showAdd: false
			}
		},
		mounted() {
			this.$nextTick(() => {
                // this.node.fields.forEach(field => {
				// 	GraphStore.getInstance().initFieldNode(field.id)
				// })
				GraphStore.getInstance().setDraggable(this.$el)
			})
		},
		methods: {
			showAddField() {
				this.showAdd = true
			},
			onClose() {
				this.showAdd = false
			},
			onSure(data) {
				const {name, type, remark, primaryKey, isIndex} = data
				let f = this.node.fields.find(field => field.name === name)
				if (f) {
					this.$message.error('字段名不能重复')
				} else {
					this.createField(name, type, remark, primaryKey, isIndex)
					this.showAdd = false
				}
			},
			onDeleteField(field) {
				let index = this.node.fields.findIndex(f => f.id === field.id)
				if (index > -1) {
					this.node.fields.splice(index, 1)
					GraphStore.getInstance().deleteConnection(field.id)
				}
			},
			createField(name, type, remark, primaryKey, isIndex) {
				this.node.fields.push({
					id: `${this.node.id}-f-${name}`,
					name,
					type,
					remark: remark || '--',
					primaryKey: primaryKey || false,
					foreignKey: isIndex || false,
					isIndex: false
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.db-table {
		position: absolute;
		width: 220px;
		background: #e2e2e2;
		box-shadow: 0 0 3px rgba(0,0,0, 0.2);
		user-select: none;
		font-size: 12px;
		border-radius: 5px;
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
					margin: 0 5px;
				}
			}
		}
		&_content {
			margin: 0;
			padding: 0;
		}
	}
</style>
