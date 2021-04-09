export const enqueue = (boardNumber) => {
	return {
		type: 'lastCalled/ENQUEUE',
		payload: boardNumber

	}

}

export const dequeue = () => {
	return {
		type: 'lastCalled/DEQUEUE'
	}
}
