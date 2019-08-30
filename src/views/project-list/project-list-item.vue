<template lang='pug'>
	.project-list-item
		span {{item.name || '--'}}
		span.operating
			i.el-icon-edit-outline
			i.el-icon-delete
		span.more
			i.el-icon-arrow-right
</template>

<script>
	export default {
		name: 'project-list-item',
		props: {
			item: {
				type: Object,
				default: function () {
					return {}
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.project-list-item {
		transition: all .2s ease-in-out;
		line-height: 50px;
		height: 50px;
		padding: 0 10px;
		box-sizing: border-box;
		border-radius: 8px;
		border: 1px solid  rgba(0,0,0,0);
		margin: 10px;
		user-select: none;
		cursor: pointer;
		display: flex;
		span {
			align-items: center;
		}
		.more {
			text-align: right;
			flex: none;
		}
		.operating {
			text-align: right;
			flex: 1;
			visibility: hidden;
			padding-right: 20px;
			i {
				margin-left: 10px;
				&:hover {
					color: #42b983;
				}
			}
		}
		&:hover {
			border: 1px solid  #42b983;
			.operating {
				visibility: visible;
			}
			.el-icon-arrow-right {
				color: #42b983;
			}
		}
	}
</style>
