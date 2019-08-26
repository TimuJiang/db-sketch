import Graph from './graph.js'
import Table from './table'

let instance = ''
export default class GraphStore {
	// eslint-disable-next-line no-useless-constructor
	constructor() {
		this.$graph = ''
		this.$app = ''
	}

	static getInstance() {
		if (!instance) instance = new GraphStore()
		return instance
	}

	init(id, app) {
		this.$graph = new Graph(id)
		this.$app = app
		this.$graph.graph.bind('beforeDrop', this.VerifyConnection.bind(this))
	}

	// 验证连线的合法性
	VerifyConnection(e) {
		const {sourceId, targetId} = e
		let r = true //  false 不会连线
		// todo 验证是否同表
		let s = sourceId.split('-f-')[0]
		let t = sourceId.split('-f-')[0]
		r = !(s === t)
		// todo 验证重复连线
		let index = this.$graph.graph.getAllConnections().findIndex(c => (sourceId+targetId) === (c.sourceId+c.targetId))
		r = !(index > -1)
		return r
	}

	createTable(data) {
		const {title, remark} = data
		let t = new Table({
			id: title,
			label: title,
			x: 0,
			y: 0,
			remark
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

	clearFieldNode($el) {
		this.$graph.graph.unmakeSource($el)
		this.$graph.graph.makeTarget($el)
	}

	initConnection(links) {
		links.forEach(l => {
			this.$graph.graph.connect({
				source: l.sourceId,
				target: l.targetId,
				anchors: ['Right', 'Left']
			})
		})
		console.log(/root/, this.$graph.graph.getAllConnections())
	}

	deleteConnection (sourceId) {
		let connections = this.$graph.graph.getAllConnections() || []
		let connection = connections.filter(c => c.sourceId === sourceId)
		if (connection) {
			connection.forEach(cc => {
				this.$graph.graph.deleteConnection(cc)
			})
		}
	}
	getLinks() {
		let connections = this.$graph.graph.getAllConnections() || []
		let links = []
		connections.forEach(c => {
			links.push({
				id: `${c.sourceId}_${c.targetId}`,
				sourceId: c.sourceId,
				targetId: c.targetId
			})
		})
		return links
	}
}
