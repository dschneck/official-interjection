import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import Board from './Board.js'
import {select} from  './actions/board/boardSlice.js';

function App() {
	const dispatch = useDispatch();
	const board = useSelector(state => state.board);
	
	let i = 1
	return (
		<>
		<h1>App Connected</h1>
		<button onClick={() => dispatch(select(i))}>Select 15</button>
		<Board />
		</>

	)
}

export default App;
