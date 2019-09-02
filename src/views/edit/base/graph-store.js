import Graph from './graph.js'
import Table from './table'
import { DefaultsConfig } from './config'
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
		this.$graph.graph.importDefaults({
			...DefaultsConfig,
			ConnectionOverlays: [
				['Arrow', {width: 8, length: 8, location: 0.5}],
				['Label', {
					label: '1-N',
					location: 0.85,
					cssClass: 'overlay-label',
					events: {
						click: (e) => {
							this.$app.$emit('overlay-click', e)
						}
					}
				}]
			]
		})
		this.$graph.graph.bind('beforeDrop', this.VerifyConnection.bind(this))
	}

	// 验证连线的合法性
	VerifyConnection(e) {
		const {sourceId, targetId} = e
		let r = true //  false 不会连线
		console.log(e)
		// todo 验证是否同表
		r = !(sourceId === targetId)
		// todo 验证重复连线
		let index = this.$graph.graph.getAllConnections().findIndex(c => (sourceId + targetId) === (c.sourceId + c.targetId))
		r = !(index > -1)
		return r
	}

	createTable(data) {
		const {title, remark} = data
		let t = new Table({
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
		this.$graph.makeSource($el)
		this.$graph.makeTarget($el)
	}

	clearFieldNode($el) {
		this.$graph.graph.unmakeSource($el)
		this.$graph.graph.unmakeTarget($el)
	}

	initConnection(links) {
		links.forEach(l => {
			let c = this.$graph.graph.connect({
				source: l.sourceId,
				target: l.targetId,
				anchors: ['Right', 'Left']
			})
			let overlays = c.getOverlays()
			let label = Object.values(overlays).find(o => o.type === 'Label')
			label.setLabel(l.type || '')
		})
	}

	deleteConnection(sourceId) {
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
			let label = Object.values(c.getOverlays()).find(o => o.type === 'Label')
			links.push({
				id: `${c.sourceId}_${c.targetId}`,
				sourceId: c.sourceId,
				targetId: c.targetId,
				type: label.getLabel()
			})
		})
		return links
	}
}
