export const FieldTypes = [
	'Number',
	'String',
	'Array',
	'Date'
]

export const DefaultOverlaysConfig = [
		['Arrow', {width: 8, length: 8, location: 0.5}]
	]

export const DefaultsConfig = {
	anchors: ['Right', 'Left'],
	Connector: ['Flowchart'],
	DragOptions: {cursor: 'pointer', zIndex: 2000},
	PaintStyle: {stroke: '#dddddd', strokeWidth: 2},
	EndpointStyle: {radius: 5, fill: '#42b983'},
	HoverPaintStyle: {stroke: '#ec9f2e'},
	EndpointHoverStyle: {fill: '#ec9f2e'},
	ConnectionOverlays: [...DefaultOverlaysConfig]

}
