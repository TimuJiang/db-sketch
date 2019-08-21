import { jsPlumb } from 'jsplumb'
const baseStyle = {}
export default class Graph {
	// eslint-disable-next-line no-useless-constructor
	constructor(id) {
		this.graph = jsPlumb.getInstance({
			Container: id,
			Connector: ['Bezier', { curviness: 50 }],
			DragOptions: { cursor: 'pointer', zIndex: 2000 },
			PaintStyle: { stroke: 'gray', strokeWidth: 2 },
			EndpointStyle: { radius: 5, fill: '#42b983' },
			HoverPaintStyle: { stroke: '#ec9f2e' },
			EndpointHoverStyle: { fill: '#ec9f2e' }
		})
	}
	setDraggable(id) {
		this.graph.draggable(id,  {
			containment: 'parent'
		})
	}
	makeSource($el) {
		this.graph.makeSource($el, {
			anchor: ['Perimeter', { shape: 'Rectangle' }]
		})
	}
	makeTarget ($el) {
		this.graph.makeTarget($el, {
			dropOptions: { hoverClass: 'dragHover' },
			anchor: ['Perimeter', { shape: 'Rectangle' }],
			allowLoopback: false
		})
	}
	addEndpoint($el) {
		this.graph.addEndpoint($el, {
			...baseStyle,
			isSource: true,
			isTarget: true,
			maxConnections: -1,
			anchors: 'Right',
			uuid: $el + '-right'

		})
		this.graph.addEndpoint($el, {
			...baseStyle,
			isSource: true,
			isTarget: true,
			anchors: 'Left',
			uuid: $el + '-left'
		})
	}

	addToGroup(tableId, id) {
		this.graph.addToGroup(tableId, id)
	}
	addGroup ($el, id) {
		this.graph.addGroup({
			el: $el,
			id: id
		})
	}
}
