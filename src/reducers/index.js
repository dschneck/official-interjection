import {combineReducers} from 'redux';
import boardReducer from './boardReducer.js';

const rootReducer = combineReducers({
	board: boardReducer
	
});

export default rootReducer;


