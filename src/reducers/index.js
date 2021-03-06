import {combineReducers} from 'redux';
import boardReducer from './boardReducer.js';
import cardReducer from './cardReducer.js';
import lastCalledReducer from './lastCalledReducer.js';
import numBallsCalledReducer from './numBallsCalledReducer.js';

const rootReducer = combineReducers({
	board: boardReducer,
	card: cardReducer,
	lastCalled: lastCalledReducer,
	numBallsCalled: numBallsCalledReducer
});

export default rootReducer;
	/*board: boardReducer,
	card: cardReducer,
	lastCalled: lastCalledReducer
*/

