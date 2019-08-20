import {Biltong, Katavorio, Mottle, jsBezier, jsPlumb, jsPlumbUtil} from 'jsplumb'

// console.log(Biltong)
// console.log(Katavorio)
// console.log(Mottle)
// console.log(jsBezier)
// console.log(jsPlumb)
// console.log(jsPlumbUtil)

export default class Graph {
	// eslint-disable-next-line no-useless-constructor
	constructor(container) {
		this.graph = jsPlumb.getInstance({
			container: 'container',
			Connector: ['Bezier', { curviness: 50 }],
			DragOptions: { cursor: 'pointer', zIndex: 2000 },
			PaintStyle: { stroke: 'gray', strokeWidth: 2 },
			EndpointStyle: { radius: 9, fill: 'gray' },
			HoverPaintStyle: { stroke: '#ec9f2e' },
			EndpointHoverStyle: { fill: '#ec9f2e' }
		})
		// this.graph.draggable('node-1')
		// this.graph.draggable('node-2')
		// this.graph.connect({
		// 	source: 'node-1',
		// 	target: 'node-2',
		// 	anchor: ['Left', 'Right']
		// })
	}
	connect(data) {
	}
	setDraggable(id) {
		this.graph.draggable(id)
	}
	unsetDraggable(id) {
		this.graph.removeFromDragSelection(id)
	}
}
