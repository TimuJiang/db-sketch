<template lang='pug'>
	el-container.edit
		el-aside(width="200px" :style="{background:'#181E2A'}")
			left-tool
		el-container
			el-header(height="50px" :style="{background: '#080A0D'}")
				top-tool
			el-container
				el-main
					g6-graph.edit-graph
			el-footer
		el-aside(width="240px" :style="{background:'#181E2A'}")
</template>

<script>
	import G6Graph from './edit/g6-graph'
	import TopTool from './edit/top-tool'
	import LeftTool from './edit/left-tool'
	export default {
		name: 'edit',
		components: { G6Graph, TopTool, LeftTool }
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
