const boardReducer = (state, action) => {
	switch (action.type) {
		case 'board/SELECT':
			const ret = Array.from(state);
		//	console.log("THE RET IS "+ ret);
			ret[action.payload-1] = true;
		//	console.log("THE INDEX IS " + action.payload);
		//	console.log("THE RET IS NOW"+ ret);
			return ret;
		default:
			return Array(75).fill(false);
	}
};

export default boardReducer;
