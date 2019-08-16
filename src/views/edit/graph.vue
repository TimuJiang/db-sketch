<template lang='pug'>
	.graph#graph
		db-table(v-for="node,index in nodeList" :node="node" :key="index")
</template>

<script>
	import GraphStore from './base/graph-store'
	import DbTable from './graph/db-table'
	export default {
		name: 'graph',
		components: { DbTable },
		props: {
		},
		data() {
			return {
				graph: null,
				nodeList: [
					{
						id: 'node-1',
						x: 100,
						y: 100
					}, {
						id: 'node-2',
						x: 500,
						y: 500
					}
				]
			}
		},
		created() {

		},
		mounted() {
			GraphStore.getInstance().init('graph')
		}
	}
</script>
<style lang="scss" scoped>
	.graph {
		position: relative;
		overflow: hidden;
	}
</style>
