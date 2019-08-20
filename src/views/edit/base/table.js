export default class Table {
	// eslint-disable-next-line no-useless-constructor
	constructor(options) {
		this.id = options.id || ''
		this.label = ''
		this.x = 100
		this.y = 100
		this.fields = [
			{
				id: 'f-1221',
				name: 'id',
				type: 'String',
				remark: '--'
			}
		]
	}
}
