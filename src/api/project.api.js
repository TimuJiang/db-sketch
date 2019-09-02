import { post } from './base'

export function create(name, tables, links) {
	return post('/api/v1/project/create', {name, tables, links})
}

export function detail(id) {
	return post('/api/v1/project/detail', {id})
}

export function update(id, tables, links) {
	return post('/api/v1/project/update', {id, tables, links})
}

export function get() {
	return post('/api/v1/project/get')
}
