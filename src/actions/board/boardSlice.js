export const select = (index) => {
	return {
		type: 'board/SELECT',
		payload: index
	}
}

export const reset = () => {
	return {
		type: 'board/RESET'
	}
}
