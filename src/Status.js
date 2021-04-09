import './styles/Status.css';
import {useDispatch} from 'react-redux';
import {select, reset_board} from './actions/board/boardSlice.js';
import {enqueue, dequeue} from './actions/lastCalled/lastCalledSlice.js';

function Status(props) {
	const dispatch = useDispatch();
	return (

		<div id="status">
				<h2>Status</h2>
				<button onClick={() => {
					let random = Math.floor((Math.random()*75) +1);
					dispatch(select(random));
					dispatch(enqueue(random));
				
				}}>
					Select Random
				</button>
				<button onClick={() => {
					dispatch(reset_board());
					dispatch(dequeue(5));
				}}>Reset</button>
		</div>
	);
}

export default Status;
