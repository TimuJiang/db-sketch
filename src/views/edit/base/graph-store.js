import Graph from './graph.js'
import Table from './table'
let instance = ''
export default class GraphStore {
	// eslint-disable-next-line no-useless-constructor
	constructor() {
		this.$graph = ''
		this.$app = ''
	}
	static getInstance () {
		if (!instance) instance = new GraphStore()
		return instance
	}
	init(id, app) {
		this.$graph = new Graph(id)
		this.$app = app
	}

	createTable(data) {
		const {title, remark} = data
		let t = new Table({
			id: title,
			label: title,
			x: 0,
			y: 0
		})
		return t
	}
	setDraggable(id) {
		this.$graph.setDraggable(id, this.$app)
	}
	makeSource($el) {
		this.$graph.makeSource($el)
	}
	makeTarget($el) {
		this.$graph.makeTarget($el)
	}
	initFieldNode($el) {
		let self = this
		self.$graph.makeSource($el)
		self.$graph.makeTarget($el)
	}
	addEndpoint($el) {
		this.$graph.addEndpoint($el)
	}
	start() {
		this.$graph.graph.setSuspendDrawing(false, true)
	}
	stop() {
		this.$graph.graph.setSuspendDrawing(true)
	}
}
