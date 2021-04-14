export const select = (index) => {
	return {
		type: 'board/SELECT',
		payload: index
	}
}

export const reset_board = () => {
	return {
		type: 'board/RESET'
	}
}

export const increment_balls_called_count = () => {
	return {
		type: 'board/INCREMENT'
	}

}
