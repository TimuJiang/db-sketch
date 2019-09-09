<script>
export default {
    name: 'base',
	data() {
    	return {
			show: false,
			resolve: '',
			reject: '',
			openData: ''
		}
	},
	watch: {
    	'show'(value) {
    		if (!value) {
				this.onClose()
			}
		}
	},
	methods: {
		open(value) {
			this.openData = value
			this.show = true
			return new Promise((resolve, reject) => {
				this.resolve = resolve
				this.reject = reject
			})
		},
		onClose (data) {
			this.show = false
			this.reject(data)
		},
		onSure () {
			this.resolve(this.openData)
			this.show = false
		}
	}
}
</script>
