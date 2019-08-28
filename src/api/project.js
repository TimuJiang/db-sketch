import { post } from './base'

export function create(name, tables, links) {
	return post('/api/v1/project/create', {name, tables, links})
}
