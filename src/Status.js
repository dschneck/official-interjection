import './styles/Status.css';
import {useDispatch, useSelector} from 'react-redux';
import {select, reset_board} from './actions/board/boardSlice.js';
import {enqueue, dequeue} from './actions/lastCalled/lastCalledSlice.js';

function Status(props) {
	const dispatch = useDispatch();
	const called = useSelector(state => state.lastCalled);
	let lastCalled = 1;
	return (

		<div id="status">
				{(() => { 
					if (called.lastCalled[4] === null) return <h1 id="called-msg">Have Fun!</h1>
					else return <h1 id="called-msg">Number {called.lastCalled[4]} called - found on x cards</h1>
				})()}
				<h1 className="away">1 AWAY: {0}</h1>
				<h1 className="away">2 AWAY: {0}</h1>
				<h1 className="away">3 AWAY: {0}</h1>
		</div>
	);
}

export default Status;
