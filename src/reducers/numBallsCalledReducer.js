const numBallsCalledReducer = (state = {numBalls: 0}, action) => {
	switch (action.type) {
		case 'numBallsCalled/INCREMENT':
			let ret = state.numBalls + 1;

			state = {
				numBalls: ret
			}

			return state;
		default:
			return state;
	}
}
export default numBallsCalledReducer;
