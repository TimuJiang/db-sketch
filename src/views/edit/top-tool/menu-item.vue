<template lang='pug'>
	.menu-item
		span {{label}}
</template>

<script>
	export default {
		name: 'menu-item',
		props: {
			label: {
				type: String,
				default: ''
			}
		}
	}
</script>
<style lang="scss" scoped>
	.menu-item {
		flex: none;
		cursor: pointer;
		height: 100%;
		color: aliceblue;
		font-size: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 10px;
		user-select: none;
		&:hover {
			background: rgba(255, 255, 255, 0.3);
		}
	}
</style>
