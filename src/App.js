import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {select} from  './actions/board/boardSlice.js';
import './styles/App.css';
import './styles/Board.css';
import Board from './Board.js';
import CardContainer from './CardContainer.js';
import LastCalled from './LastCalled.js';
import Status from './Status.js';

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
		</div>

	)
}

export default App;
/*<button onClick={() => dispatch(select(i))}>Select {i}</button>*/
