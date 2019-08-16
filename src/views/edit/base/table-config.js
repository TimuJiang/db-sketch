const H = 60
const W = 240
const H2 = H/2
const W2 = W/2
const CONFIG = {
	basicColor: '#722ED1',
	fontColor: '#722ED1',
	borderColor: '#722ED1',
	bgColor: '#F6EDFC'
}
export default {
	draw(cfg, group) {
		const container = group.addShape('rect', {
			attrs: {
				x: -W2,
				y: -H2,
				width: W,
				height: H,
				radius: 2,
				stroke: CONFIG.borderColor,
				fill: CONFIG.bgColor,
				fillOpacity: 0.45,
				lineWidth: 1
			}
		})
		group.addShape('rect', {
			attrs: {
				x: -W2,
				y: -H2,
				width: 3,
				height: H,
				radius: 2,
				fill: CONFIG.borderColor
			}
		})
		group.addShape('text', {
			attrs: {
				x: -W2 + 10,
				y: -H2 + 20,
				text: cfg.label,
				fontSize: 14,
				textAlign: 'left',
				textBaseline: 'middle',
				fontWeight: 'bold',
				fill: CONFIG.fontColor
			}
		})
		group.addShape('text', {
			attrs: {
				x: -W2 + 10,
				y: 15,
				text: cfg.remark,
				fontSize: 12,
				textAlign: 'left',
				textBaseline: 'middle',
				fill: CONFIG.fontColor
			}
		})
		group.addShape('circle', {
			attrs: {
				x: -W2 + 1,
				y: H / 2 - H2,
				r: 6,
				fill: CONFIG.basicColor
			}
		})
		return container
	}
}
