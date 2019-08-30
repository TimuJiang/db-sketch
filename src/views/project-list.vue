<template lang='pug'>
	.project-list
		.project-list__content
			.toolbar
				el-button(@click="onNew") 新建
			project-list-item(v-for="item,index in list" :key="item._id" :item="item" @click.native="onEdit(item)")
</template>

<script>
	import ProjectListItem from './project-list/project-list-item'

	export default {
		name: 'project-list',
		components: {ProjectListItem},
		data() {
			return {
				list: []
			}
		},
		mounted() {
			this.load()
		},
		methods: {
			load() {
				this.$api.project.get()
					.then(data => {
						this.list = data
					})
			},
			onNew() {
				this.$prompt('请输入名称', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputValidator: (value) => {
						if (!value) return false
						if (value.length > 20) return false
						return true
					},
					inputErrorMessage: '输入正确的名称'
				}).then(({value}) => {
					this.$api.project.create(value)
						.then(data => {
							this.$router.push(`/edit/${data._id}`)
						})
				}).catch(() => {

				})
			},
			onEdit(item) {
				this.$router.push(`/edit/${item._id}`)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.project-list {
		padding-top: 200px;

		&__content {
			width: 1000px;
			margin: 0 auto;

			.toolbar {
				margin-bottom: 20px;
			}
		}
	}
</style>
