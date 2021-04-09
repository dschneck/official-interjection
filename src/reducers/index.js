import {combineReducers} from 'redux';
import boardReducer from './boardReducer.js';
import cardReducer from './cardReducer.js';
import lastCalledReducer from './lastCalledReducer.js';

const rootReducer = combineReducers({
	board: boardReducer,
	card: cardReducer,
	lastCalled: lastCalledReducer
	
});

export default rootReducer;


