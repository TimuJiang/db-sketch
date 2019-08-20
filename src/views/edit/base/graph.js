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
	}
	setDraggable(id) {
		this.graph.draggable(id)
	}
	makeSource($el) {
		this.graph.makeSource($el, {
			anchor: ['Perimeter', { shape: 'Rectangle' }],
			connectorStyle: {
				stroke: '#5c96bc',
				strokeWidth: 2,
				outlineStroke: 'transparent',
				outlineWidth: 4
			},
			extract: {
				action: 'the-action'
			},
			maxConnections: -1,
			onMaxConnections: function (info, e) {
				alert('Maximum connections (' + info.maxConnections + ') reached')
			}
		})
	}
	addToGroup(tableId, id) {
		this.graph.addToGroup(tableId, id)
	}
	addGroup ($el, id) {
		this.graph.addGroup({
			el: $el,
			id: id,
			constrain: true,
			anchor: 'Continuous',
			droppable: false,
			endpoint: ['Dot', {radius: 3}]
		})
	}
}
