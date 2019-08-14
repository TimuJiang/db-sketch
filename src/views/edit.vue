<template lang='pug'>
	el-container.edit
		el-aside(width="200px")
		el-container
			el-header
			el-container
				el-main
					g6-graph.edit-graph
				el-aside(width="200px")
			el-footer
</template>

<script>
	import G6Graph from './edit/g6-graph'
	import TopTool from './edit/top-tool'
	export default {
		name: 'edit',
		components: { G6Graph, TopTool }
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
