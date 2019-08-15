export default {
	drawShape: function drawShape(cfg, group) {
		return group.addShape('rect', {
			attrs: {
				x: -120,
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
}
