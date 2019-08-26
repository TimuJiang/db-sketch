<template lang='pug'>
	li.db-field(:id="field.id")
		span.name {{field.name}}
		span.type {{field.type}}
		span.tools(@click.stop.prevent="onStop" @mousedown.stop.prevent="onStop")
			i.icon-button.el-icon-delete(@click="onDelete")
			i.icon-button.el-icon-edit-outline
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
		data() {
			return {
				visible: false
			}
		},
		mounted() {
			this.$nextTick(() => {
				GraphStore.getInstance().initFieldNode(this.$el)
			})
		},
		beforeDestroy() {
			this.$nextTick(() => {
				GraphStore.getInstance().clearFieldNode(this.$el)
			})
		},
		methods: {
			onDelete() {
				this.$emit('delete', this.field)
			},
			onStop () { }
		}
	}
</script>
<style>
	.jtk-connected {
		background: rgba(66, 185, 131, 0.1);
	}
</style>
<style lang="scss" scoped>
	.db-field {
		height: 28px;
		padding: 0 10px;
		line-height: 28px;
		color: rgba(0,0,0, 0.6);
		display: flex;
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
		overflow: hidden;
		&:last-child {
			border-bottom: none;
		}
		.name {
			width: 50%;
			font-size: 12px;
			font-weight: 600;
		}
		.type {
			width: 30%;
		}
		.tools {
			width: 20%;
			text-align: right;
			.icon-button {
				margin: 0 2px;
				cursor: pointer;
				visibility: hidden;
				font-size: 14px;
				&:hover {
					color: #42b983;
				}
			}
		}
		&:hover {
			.icon-button {
				visibility: visible;
			}
		}
	}
</style>
