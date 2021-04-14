const boardReducer = (state = {board: Array(75).fill(false)}, action) => {
	switch (action.type) {
		case 'board/SELECT':
			let cpy = Array.from(state.board);
			cpy[action.payload-1] = true;
			state = {
				board: cpy
			}
			return state;
		case 'board/RESET':
			state =  {
				board: Array(75).fill(false),
			}
			return state;
		default:
			return state;
	}
};

export default boardReducer;
