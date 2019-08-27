<template lang='pug'>
	el-container.edit
		el-aside(width="240px" :style="{background:'#181E2A'}")
			left-tool
		el-container
			el-header(height="50px" :style="{background: '#080A0D'}")
				top-tool(
					@edit-new="onAddNew"
					@edit-save="onSave"
					@edit-clear="onClear"
				)
			el-container
				el-main
					graph.edit-graph(
						:tables="tables"
						@delete-connection="onDeleteConnection"
						@add-connection="onAddConnection"
					)
		create-table-dialog(:show="showCreate" @close="onClose" @sure="onSure")
		relation-dialog(:show="showRelation" @close="onRelationClose" @sure="onRelationSure")
</template>

<script>
	import Graph from './edit/graph'
	import TopTool from './edit/top-tool'
	import LeftTool from './edit/left-tool'
	import GraphStore from './edit/base/graph-store'
	import CreateTableDialog from './edit/create-table-dialog'
	import RelationDialog from './edit/relation-dialog'
	import Table from './edit/base/table'
	export default {
		name: 'edit',
		components: {Graph, TopTool, LeftTool, CreateTableDialog, RelationDialog},
		data() {
			return {
				tables: [],
				links: [],
				showCreate: false,
				showRelation: false
			}
		},
		created() {

		},
		mounted() {
			this.$root.$on('overlay-click', this.onOverlayClick)
			this.loadData()
		},
		beforeDestroy() {
			this.$root.$off('overlay-click', this.onOverlayClick)
		},
		methods: {
			onOverlayClick(Label) {
				const {sourceId, targetId} = Label.component
				let id = `${sourceId}_${targetId}`
				let l = this.links.find(l => l.id === id)
				this.$message.success(l.id)
				this.showRelation = true
			},
			loadData() {
				let dataString = localStorage.getItem('db-s')
				let data = JSON.parse(dataString)
				if (data) {
					let list = []
					data.tables = data.tables || []
					data.tables.forEach(t => {
						list.push(new Table(t))
					})
					this.tables = [...list]
					this.links = data.links || []
					this.initLinks()
				}
			},
			initLinks() {
				this.$nextTick(() => {
					GraphStore.getInstance().initConnection(this.links)
				})
			},
			onClear() {
				this.tables = []
				this.links = []
				localStorage.setItem('db-s', '{}')
			},
			onSave() {
				let links = GraphStore.getInstance().getLinks()
				let data = {
					tables: this.tables,
					links: links
				}
				let str = JSON.stringify(data)
				localStorage.setItem('db-s', str)
				this.$message.success('保存成功')
			},
			onAddNew() {
				this.showCreate = true
			},
			onClose() {
				this.showCreate = false
			},
			onSure(data) {
				let h = this.tables.find(t => t.id === data.title)
				if (!h) {
					let t = GraphStore.getInstance().createTable(data)
					this.tables.push(t)
				} else {
					this.$message.error(`表名${data.title}已存在`)
				}
				this.showCreate = false
			},
			onRelationSure () {},
			onRelationClose() {
				this.showRelation = false
			},
			// 删除连线
			onDeleteConnection(c) {
			},
			// 添加联线
			onAddConnection(c) {
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
