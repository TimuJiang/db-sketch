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
</template>

<script>
	import Graph from './edit/graph'
	import TopTool from './edit/top-tool'
	import LeftTool from './edit/left-tool'
	import GraphStore from './edit/base/graph-store'
	export default {
		name: 'edit',
		components: {Graph, TopTool, LeftTool},
		data() {
			return {
				table: []
			}
		},
		methods: {
			onAddNew() {
				let t = GraphStore.getInstance().createTable()
				this.table.push(t)
				this.$nextTick(() => {
					GraphStore.getInstance().setDraggable(t.id)
				})
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
