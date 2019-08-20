<template lang='pug'>
	.db-table(:id="node.id" :style="{left: `${node.x}px`, top: `${node.y}px`}")
		.db-table_title
			span 我得表格
		.db-table_content
			db-field(v-for="field,index in node.fields" :key="index" :field="field")
</template>

<script>
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
		background: azure;
		box-shadow: 0 0 2px #2c3e50;
		user-select: none;
		&_title {
			height: 36px;
			line-height: 36px;
		}
	}
</style>
