export const select = (index) => {
	return {
		type: 'board/SELECT',
		payload: index
	}
}
