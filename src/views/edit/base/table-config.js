export default {
	draw(cfg, group) {
		const circle = group.addShape('rect', {
			attrs: {
				x: -120,
				y: -25,
				width: 240,
				height: 50,
				radius: 0,
				stroke: '#00C0A5',
				fill: '#92949F',
				fillOpacity: 0.45,
				lineWidth: 1
			}
		})
		const text = group.addShape('text', {
			attrs: {
				x: 0,
				y: 0,
				textAlign: 'center',
				text: cfg.label,
				fill: '#444'
			}
		})
		group.addShape('text', {
			attrs: {
				x: 0,
				y: 20,
				textAlign: 'center',
				text: cfg.label,
				fill: '#444'
			}
		})
		return circle
	}
}
