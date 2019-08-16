import Graph from './Graph'
let instance = ''
export default class GraphStore {
	// eslint-disable-next-line no-useless-constructor
	constructor() {
		this.graph = ''
	}
	static getInstance () {
		if (!instance) instance = new GraphStore()
		return instance
	}
	init(id, w, h) {
		this.graph = new Graph(id, w, h)
	}

	updateData (data) {
		this.graph.updateData(data)
	}
}
