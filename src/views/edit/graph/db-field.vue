<template lang='pug'>
	li.db-field(:id="field.id")
		span.name {{field.name}}
		span.type {{field.type}}
</template>

<script>
	import GraphStore from '../base/graph-store'
	export default {
		name: 'db-field',
		props: {
			field: {
				type: Object,
				default: function () {
					return {}
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				GraphStore.getInstance().initFieldNode(this.field.id)
			})
		}
	}
</script>
<style lang="scss" scoped>
	.db-field {
		height: 28px;
		padding: 0 10px;
		line-height: 28px;
		color: rgba(0,0,0, 0.6);
		display: flex;
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
		&:last-child {
			border-bottom: none;
		}
		.name {
			width: 50%;
			font-size: 12px;
			font-weight: 600;
		}
		.type {
			width: 50%;
		}
	}
</style>
