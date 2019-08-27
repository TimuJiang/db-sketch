import {jsPlumb} from 'jsplumb'

export default class Graph {
	// eslint-disable-next-line no-useless-constructor
	constructor(id) {
		this.graph = jsPlumb.getInstance({
			Container: id
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
