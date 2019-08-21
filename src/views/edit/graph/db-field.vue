<template lang='pug'>
	li.db-field(:id="field.id")
		span.name {{field.name}}
		span.type {{field.type}}
</template>

<script>
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
		}
	}
</script>
<style lang="scss" scoped>
	.db-field {
		height: 30px;
		padding: 0 10px;
		line-height: 30px;
		color: rgba(0,0,0, 0.6);
		display: flex;
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
