import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {select} from  './actions/board/boardSlice.js';
import './App.css';
import './Board.css';
import Board from './Board.js';
import CardContainer from './CardContainer.js';

function App(props) {
	const dispatch = useDispatch();
	const board = useSelector(state => state.board);
	
	let min = Math.ceil(1);
	let max = Math.floor(75);
	
	let i = Math.floor(Math.random() * (max - min) + min);
	const num = props.numCards;
	return (
		<div id="app">
				<h1>App Connected</h1>
				<button onClick={() => dispatch(select(i))}>Select {i}</button>
				<Board />
				<CardContainer numCards={num} />
		</div>

	)
}

export default App;
