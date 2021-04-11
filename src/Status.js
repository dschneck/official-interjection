import './styles/Status.css';
import {useDispatch} from 'react-redux';
import {select, reset_board} from './actions/board/boardSlice.js';
import {enqueue, dequeue} from './actions/lastCalled/lastCalledSlice.js';

function Status(props) {
	const dispatch = useDispatch();
	let lastCalled = 1;
	return (

		<div id="status">
				<h1 id="called-msg">Number {lastCalled} called - found on x cards</h1>
				<h1 className="away">1 AWAY: {0}</h1>
				<h1 className="away">2 AWAY: {0}</h1>
				<h1 className="away">3 AWAY: {0}</h1>
		</div>
	);
}

export default Status;
