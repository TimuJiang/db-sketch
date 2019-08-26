<template lang='pug'>
	.graph#graph
		db-table(v-for="node,index in tables" :node="node" :key="index")
</template>

<script>
	import GraphStore from './base/graph-store'
	import DbTable from './graph/db-table'

	export default {
		name: 'graph',
		components: {DbTable},
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
				GraphStore.getInstance().$graph.graph.bind('connection', this.addConnection)
				GraphStore.getInstance().$graph.graph.bind('connectionMoved', this.movedConnection)
				GraphStore.getInstance().$graph.graph.bind('connectionDetached', this.detachedConnection)
			})
		},
		beforeDestroy() {
		},
		methods: {

			addConnection(connection, event) {
				const {sourceId, targetId} = connection
				console.log(/add/, sourceId + '->' + targetId)
				this.$emit('add-connection', {
					id: `${sourceId}_${targetId}`,
					sourceId,
					targetId
				})
			},
			movedConnection(connection, event) {
				const {originalSourceId, originalTargetId, newSourceId, newTargetId} = connection
				console.log(/move/, originalSourceId + '->' + originalTargetId)
				console.log(/move/, newSourceId + '->' + newTargetId)
				this.$emit('delete-connection', {
					id: `${originalSourceId}_${originalTargetId}`,
					sourceId: originalSourceId,
					targetId: originalTargetId
				})
			},
			detachedConnection(connection, event) {
				const {sourceId, targetId} = connection
				console.log(/detached/, sourceId + '->' + targetId)
				this.$emit('add-connection', {
					id: `${sourceId}_${targetId}`,
					sourceId,
					targetId
				})
			},
			updateTable(e) {
				let t = this.tables.find(t => t.id === e.id)
				if (t) {
					t.x = e.params.pos[0]
					t.y = e.params.pos[1]
				}
			}
		}
	}
</script>
<style lang="scss">
	.overlay-label {
		font-size: 12px;
		color: #f2f2f2;
		background: #42b983;
		border-radius: 3px;
		padding: 2px 3px;
		cursor: pointer;
	}
</style>
<style lang="scss" scoped>
	.graph {
		position: relative;
		overflow: hidden;
	}
</style>
