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
import {increment} from './actions/numBallsCalled/numBallsCalledSlice.js';

async function randomNumbers() {
	let url = 'https://www.random.org/integers/?num=24&min=1&max=75&col=5&base=10&format=plain&rnd=new';

	const response = await fetch(url);
	const text = await response.text();

	let cardNums =  new Array(25);

	console.log(text);
	console.log(text[0]);

}

function App(props) {
	const dispatch = useDispatch();
	
	return (
		<div id="app">
				<Board numBall={props.numBall} />
				<Status />
				<CardContainer numCards={props.numCards} />
				<LastCalled />
				<button onClick={() => {
					let random = Math.floor((Math.random()*75)+1);
					dispatch(increment());
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

randomNumbers();

export default App;
