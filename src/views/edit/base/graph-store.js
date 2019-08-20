import Graph from './graph.js'
import Table from './table'
let instance = ''
export default class GraphStore {
	// eslint-disable-next-line no-useless-constructor
	constructor() {
		this.$graph = ''
	}
	static getInstance () {
		if (!instance) instance = new GraphStore()
		return instance
	}
	init(id) {
		this.$graph = new Graph(id)
		console.log(/graph/, this.$graph)
	}

	createTable() {
		let id = `node-${new Date().getTime()}`
		let t = new Table({
			id: id,
			label: 'test',
			x: 100,
			y: 100
		})
		return t
	}
	setDraggable(id) {
		this.$graph.setDraggable(id)
	}
	initTable($el, id) {
		this.$graph.addGroup($el, id)
	}
	addToTable(tableId, id) {
		this.$graph.addToGroup(tableId, id)
	}
	makeSource($el) {
		this.$graph.makeSource($el)
	}
	makeTarget($el) {
		this.$graph.makeSource($el)
	}
}
