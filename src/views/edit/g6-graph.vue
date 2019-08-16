<template lang='pug'>
	.g6-graph#g6-graph
</template>

<script>
	import GraphStore from './GraphStore'
	export default {
		name: 'g6-graph',
		props: {
		},
		data() {
			return {
				graph: null
			}
		},
		created() {
			this.nodes = [
				{
					id: 1,
					x: 200,
					y: 200,
					label: 'Employee',
					remark: '员工基础表'
				}, {
					id: 2,
					x: 600,
					y: 600,
					label: 'Employee'
				}
			]
			this.edges = [
				{source: '1', target: '2', shape: 'cubic'}
			]
		},
		mounted() {
			let w = this.$el.clientWidth
			let h = this.$el.clientHeight
			GraphStore.getInstance().init('g6-graph', w, h)
			GraphStore.getInstance().updateData({
				nodes: this.nodes,
				edges: this.edges
			})
		}
	}
</script>
<style lang="scss" scoped>
	.g6-graph {

	}
</style>
