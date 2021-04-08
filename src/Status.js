import './styles/Status.css';
import {useDispatch} from 'react-redux';
import {select, reset} from './actions/board/boardSlice.js';

function Status(props) {
	const dispatch = useDispatch();
	return (

		<div id="status">
				<h2>Status</h2>
				<button onClick={() => {
					let random = Math.floor((Math.random()*75) +1);
					dispatch(select(random));
				
				}}>
					Select Random
				</button>
				<button onClick={() => dispatch(reset())}>Reset</button>
		</div>
	);
}

export default Status;
