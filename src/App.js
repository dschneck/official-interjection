import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import Board from './Board.js';
import Card_Container from './CardContainer.js';
import {select} from  './actions/board/boardSlice.js';

function App(props) {
	const dispatch = useDispatch();
	const board = useSelector(state => state.board);
	
	let min = Math.ceil(1);
	let max = Math.floor(75);
	
	let i = Math.floor(Math.random() * (max - min) + min);
	console.log('I is ' + i);
	const num = props.numCards;
	return (
		<div className="app">
				<h1>App Connected</h1>
				<button onClick={() => dispatch(select(i))}>Select {i}</button>
				<Board />
				<Card_Container numCards={num} />
		</div>

	)
}

export default App;
