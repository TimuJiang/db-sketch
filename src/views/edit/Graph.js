import G6 from '@antv/g6'

G6.registerNode('table', {
	drawShape: function drawShape(cfg, group) {
		return group.addShape('rect', {
			attrs: {
				x: -75,
				y: -25,
				width: 240,
				height: 50,
				radius: 8,
				stroke: '#00C0A5',
				fill: '#92949F',
				fillOpacity: 0.45,
				lineWidth: 1
			}
		})
	}
}, 'single-shape')

export default class Graph {
	// eslint-disable-next-line no-useless-constructor
	constructor(container, w, h) {
		this.graph = new G6.Graph({
			container: container,
			fitViewPadding: 0,
			width: w,
			height: h,
			defaultNode: {
				shape: 'table',
				labelCfg: {
					style: {
						fill: '#666',
						fontSize: 14,
						fontWeight: 'bold'
					}
				}
			},
			defaultEdge: {},
			minZoom: 1,
			maxZoom: 1,
			modes: {
				default: [
					{
						type: 'drag-node'
					}, {
						type: 'drag-canvas'
					}
				]
			}
		})
	}
	updateData(data) {
		this.graph.data(data)
		this.graph.render()
	}
}
