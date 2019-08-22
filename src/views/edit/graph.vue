<template lang='pug'>
	.graph#graph
		db-table(v-for="node,index in tables" :node="node" :key="index")
</template>

<script>
	import GraphStore from './base/graph-store'
	import DbTable from './graph/db-table'
	export default {
		name: 'graph',
		components: { DbTable },
		props: {
			tables: {
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
		    this.$nextTick(() => {
                GraphStore.getInstance().init(this.$el)
			})
		}
	}
</script>
<style lang="scss" scoped>
	.graph {
		position: relative;
		overflow: hidden;
	}
</style>
