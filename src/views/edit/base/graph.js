import {jsPlumb} from 'jsplumb'

const baseStyle = {}
export default class Graph {
	// eslint-disable-next-line no-useless-constructor
	constructor(id) {
		this.graph = jsPlumb.getInstance({
			Container: id,
			Connector: ['Bezier', {curviness: 50}],
			DragOptions: {cursor: 'pointer', zIndex: 2000},
			PaintStyle: {stroke: 'gray', strokeWidth: 2},
			EndpointStyle: {radius: 5, fill: '#42b983'},
			HoverPaintStyle: {stroke: '#ec9f2e'},
			EndpointHoverStyle: {fill: '#ec9f2e'}
		})
	}

	setDraggable(el, app) {
		this.graph.draggable(el, {
			containment: 'parent',
			start(params) {
			},
			stop(params) {
				// 拖动结束
				app.$emit('app-draggable-end', {
					id: el.id,
					params: params
				})
			}
		})
	}

	makeSource($el) {
		this.graph.makeSource($el, {
			anchor: ['Left', 'Right']
		})
	}

	makeTarget($el) {
		this.graph.makeTarget($el, {
			dropOptions: {hoverClass: 'dragHover'},
			anchor: ['Left', 'Right'],
			allowLoopback: false
		})
	}
}
