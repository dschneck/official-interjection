import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './styles/App.css';
import './styles/Board.css';
import Board from './Board.js';
import CardContainer from './CardContainer.js';
import LastCalled from './LastCalled.js';
import Status from './Status.js';

import {select, reset_board} from './actions/board/boardSlice.js';
import {enqueue, dequeue} from './actions/lastCalled/lastCalledSlice.js';

function App(props) {
	const dispatch = useDispatch();
	const board = useSelector(state => state.board);
	
//	let min = Math.ceil(1);
//	let max = Math.floor(75);
	
//	let i = Math.floor(Math.random() * (max - min) + min);
	const num = props.numCards;
	return (
		<div id="app">
				<Board />
				<Status />
				<CardContainer numCards={num} />
				<LastCalled />
				<button onClick={() => {
					let random = Math.floor((Math.random()*75)+1);
					dispatch(select(random));
					dispatch(enqueue(random));
				}}>
					Select Random
				</button>
				<button onClick={ () => {
					dispatch(reset_board());
					dispatch(dequeue(5));
				}}>
				Reset</button>
		</div>

	)
}

export default App;
