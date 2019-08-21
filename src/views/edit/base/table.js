export default class Table {
	// eslint-disable-next-line no-useless-constructor
	constructor(options) {
		this.id = options.id || ''
		this.label = options.label || ''
		this.remark = options.remark || ''
		this.x = options.x || 0
		this.y = options.y || 0
		this.fields = []
		this.createField('id', 'String')
		this.createField('name', 'String')
	}
	createField(name, type, remark) {
		let index = this.fields.length + 1
		let f = {
			id: `${this.id}-f-${index}`,
			name,
			type,
			remark: remark || '--'
		}
		this.fields.push(f)
	}
}
