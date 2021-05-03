const lastCalledReducer = (state = {lastCalled: Array(5).fill(null)}, action) =>  {
	switch (action.type)  {
		case 'lastCalled/ENQUEUE':
			let ret = Array.from(state.lastCalled);
			ret.push(action.payload);
			
			if (ret.length > 5) {
				ret = Array.from(ret.slice(1));
			}

			state = {
				lastCalled: ret
			}

			return state;
		case 'lastCalled/DEQUEUE':
			let retx; 

			if (action.payload === 5) retx =  Array(5).fill(null);
			else retx = Array.from(state.lastCalled.slice(action.payload));	

			state = {
				lastCalled: retx
			}

			return state;
		default:
			return state;

	}


}

export default lastCalledReducer;
