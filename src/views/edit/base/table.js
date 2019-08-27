import shortid from 'shortid'

export default class Table {
	// eslint-disable-next-line no-useless-constructor
	constructor(options) {
		this.id = options.id || shortid.generate()
		this.label = options.label || ''
		this.remark = options.remark || ''
		this.x = options.x || 0
		this.y = options.y || 0
		this.fields = options.fields ? [...options.fields] : []
	}
	createField(name, type, remark, primaryKey, isIndex) {
		let f = {
			id: shortid.generate(),
			name,									// 字段名
			type,									// 字段类型
			remark: remark || '--', 				// 字段备注
			primaryKey: primaryKey || false,		// 主键
			foreignKey: isIndex || false,			// 外键
			isIndex: false 							// 索引
		}
		this.fields.push(f)
	}
}
