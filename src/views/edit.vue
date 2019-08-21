<template lang='pug'>
	el-container.edit
		el-aside(width="240px" :style="{background:'#181E2A'}")
			left-tool
		el-container
			el-header(height="50px" :style="{background: '#080A0D'}")
				top-tool(
					@edit-new="onAddNew"
				)
			el-container
				el-main
					graph.edit-graph(:table="table")
		create-table-dialog(:show="showCreate" @close="onClose" @sure="onSure")
</template>

<script>
	import Graph from './edit/graph'
	import TopTool from './edit/top-tool'
	import LeftTool from './edit/left-tool'
	import GraphStore from './edit/base/graph-store'
	import CreateTableDialog from './edit/create-table-dialog'

	export default {
		name: 'edit',
		components: {Graph, TopTool, LeftTool, CreateTableDialog},
		data() {
			return {
				table: [],
				showCreate: false
			}
		},
		methods: {
			onAddNew() {
				this.showCreate = true
			},
			onClose() {
				this.showCreate = false
			},
			onSure(data) {
				let h = this.table.find(t => t.id === data.title)
				if (!h) {
					let t = GraphStore.getInstance().createTable(data)
					this.table.push(t)
					this.$nextTick(() => {
						GraphStore.getInstance().setDraggable(t.id)
					})
				} else {
					this.$message.error(`表名${data.title}已存在`)
				}
				this.showCreate = false
			}
		}
	}
</script>
<style lang="scss" scoped>
	.edit {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		.edit-graph {
			height: 100%;
		}
	}
</style>
