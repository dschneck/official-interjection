import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import './Board.css';
// need  to import the actions that board would take

function Board(props) {
	const dispatch = useDispatch();
	const board = useSelector(state => state.board);
	const numBalls = useSelector(state => state.numBallsCalled).numBalls;
	const lastCalled = useSelector(state => state.lastCalled).lastCalled[4];

		return (
			<table id="board">
			<tbody>
			<tr id="B-row"><td id="B-box" className="letter">B</td>
				{board.board.slice(0, 15).map( (element, index) => {
					if (element) { 
						if (lastCalled === index+1 && numBalls === 75) return <td id="final-letter" key={index+1} className="selected">{index+1}</td> 
						else return <td key={index+1} className="selected">{index+1}</td> 
					}
					return <td>{index+1}</td>
				})}
			</tr>
			<tr id="I-row"><td id="I-box" className="letter">I</td>
				{board.board.slice(15, 30).map( (element, index) => {
					if (element) {
						if (lastCalled === index+16 && numBalls === 75) return <td id="final-letter" key={index+16} className="selected">{index+16}</td> 
						else return <td key={index+16} className="selected">{index+16}</td> 
					}
					return <td>{index+16}</td>
				})}
			</tr>
			<tr id="N-row"><td id="N-box" className="letter">N</td>
				{board.board.slice(30, 45).map( (element, index) => {
					if (element) {
						if (lastCalled === index+31 && numBalls === 75) return <td id="final-letter" key={index+31} className="selected">{index+31}</td> 
						else return <td key={index+31} className="selected">{index+31}</td> 
					}
					return <td>{index+31}</td>
				})}
			</tr>
			<tr id="G-row"><td id="G-box" className="letter">G</td>
				{board.board.slice(45, 60).map( (element, index) => {
					if (element) {
						if (lastCalled === index+46 && numBalls === 75) return <td id="final-letter" key={index+46} className="selected">{index+46}</td> 
						else return <td key={index+46} className="selected">{index+46}</td> 
					}
					return <td>{index+46}</td>
				})}
			</tr>
			<tr id="O-row"><td id="O-box" className="letter">O</td>
				{board.board.slice(60, 75).map( (element, index) => {
					if (element) {
						if (lastCalled === index+61 && numBalls === 75) return <td id="final-letter" key={index+61} className="selected">{index+61}</td> 
						else return <td key={index+61} className="selected">{index+61}</td> 
					}
					return <td>{index+61}</td>
				})}
			</tr>
			</tbody>
			</table>
		)
}

export default Board;
