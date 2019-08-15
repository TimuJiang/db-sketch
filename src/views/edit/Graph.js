import G6 from '@antv/g6'

// import table from './base/table-shape'
import tableConfig from './base/table-config'

// G6.registerNode('table', table, 'single-shape')
G6.registerNode('table', tableConfig, 'single-shape')

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
			pixeRatio: 2,
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
