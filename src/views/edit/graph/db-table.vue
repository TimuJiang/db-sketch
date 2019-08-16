<template lang='pug'>
	.db-table(:id="node.id" :style="{left: `${node.x}px`, top: `${node.y}px`}")
		.db-table_title
			span 我得表格
		.db-table_content
</template>

<script>
	export default {
		name: 'db-table',
		props: [ 'node' ]
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
