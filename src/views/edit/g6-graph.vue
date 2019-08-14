<template lang='pug'>
	.g6-graph#g6-graph
</template>

<script>
	import Graph from './Graph'

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
					x: 100,
					y: 100,
					label: 'rect'
				}, {
					id: 2,
					x: 200,
					y: 100,
					label: 'rect'
				}, {
					id: 3,
					x: 300,
					y: 100,
					label: 'rect'
				}, {
					id: 4,
					x: 400,
					y: 100,
					label: 'rect'
				}
			]
			this.edges = [
				{
					source: '1',
					target: '2',
					shape: 'line',
					label: '左关联'
				}, {
					source: '1',
					target: '3',
					shape: 'line',
					label: '左关联'
				}, {
					source: '1',
					target: '4',
					shape: 'line',
					label: '左关联'
				}
			]
		},
		mounted() {
			let w = this.$el.clientWidth
			let h = this.$el.clientHeight
			console.log(w)
			console.log(h)
			this.graph = new Graph('g6-graph', w, h)
			this.graph.updateData({
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
