<template lang='pug'>
	.graph#graph
		db-table(v-for="node,index in table" :node="node" :key="index")
</template>

<script>
	import GraphStore from './base/graph-store'
	import DbTable from './graph/db-table'
	export default {
		name: 'graph',
		components: { DbTable },
		props: {
			table: {
				type: Array,
				default: function () {
					return []
				}
			}
		},
		data() {
			return {
				graph: null
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
