<template lang='pug'>
	.db-table(:id="node.id")
		.db-table_title
			.name {{ node.label }}
			.toolbar
				i.icon-button.el-icon-edit-outline
		ul.db-table_content
			db-field(v-for="field,index in node.fields" :key="index" :field="field")
</template>

<script>
	import GraphStore from '../base/graph-store'
	import DbField from './db-field'
	export default {
		name: 'db-table',
		props: [ 'node' ],
		components: { DbField },
		data() {
			return {
				draggable: false
			}
		},
		mounted() {
			this.$nextTick(() => {
				// GraphStore.getInstance().initTable(this.$el, `g-${this.node.id}`)
                this.node.fields.forEach(field => {
                    GraphStore.getInstance().addEndpoint(field.id)
					// GraphStore.getInstance().addToTable(`g-${this.node.id}`, el)
					// GraphStore.getInstance().initFieldNode(el)
				})
                // GraphStore.getInstance().addEndpoint(this.$el)
			})
		},
		methods: {
			onSetMove(type) {

			}
		}
	}
</script>
<style lang="scss" scoped>
	.db-table {
		position: absolute;
		width: 240px;
		background: #e2e2e2;
		box-shadow: 0 0 3px rgba(0,0,0, 0.2);
		user-select: none;
		font-size: 12px;
		border-radius: 5px;
		&_title {
			height: 30px;
			padding: 0 5px;
			line-height: 30px;
			background: #42b983;
			color: #ffffff;
			font-size: 14px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.toolbar {
				.icon-button {
					cursor: pointer;
					font-size: 14px;
				}
			}
		}
		&_content {
			margin: 0;
			padding: 0;
		}
	}
</style>
