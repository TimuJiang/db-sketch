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
                GraphStore.getInstance().init(this.$el, this.$root)
				this.$root.$on('app-draggable-end', this.updateTable)
			})
		},
		methods: {
			updateTable(e) {
				let t = this.tables.find(t => t.id === e.id)
				console.log(e)
				if (t) {
					t.x = e.params.pos[0]
					t.y = e.params.pos[1]
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.graph {
		position: relative;
		overflow: hidden;
	}
</style>
