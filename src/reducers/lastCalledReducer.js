const lastCalledReducer = (state, action) =>  {
	switch (action.type)  {
		case 'lastCalled/ENQUEUE':
			return Array.from(state.push(action.payload));
		case 'lastCalled/DEQUEUE':
			return Array.from(state.slice(1));
		default:
			return Array(5).fill(null);

	}


}

export default lastCalledReducer;
