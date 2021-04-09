const boardReducer = (state, action) => {
	switch (action.type) {
		case 'board/SELECT':
			const ret = Array.from(state);
			ret[action.payload-1] = true;
			return ret;
		case 'board/RESET':
			return Array(75).fill(false);
		default:
			return Array(75).fill(false);
	}
};

export default boardReducer;
