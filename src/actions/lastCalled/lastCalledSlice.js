export const enqueue = (boardNumber) => {
	return {
		type: 'lastCalled/ENQUEUE',
		payload: boardNumber

	}

}

export const dequeue = (x) => {
	return {
		type: 'lastCalled/DEQUEUE',
		payload: x
	}
}
