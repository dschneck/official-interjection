import {combineReducers} from 'redux';
import boardReducer from './boardReducer.js';
import cardReducer from './cardReducer.js';

const rootReducer = combineReducers({
	board: boardReducer,
	card: cardReducer
	
});

export default rootReducer;


