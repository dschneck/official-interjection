import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import './Board.css';
// need  to import the actions that board would take


export function* incNumBallsCalled() {
	let i = 1;

	while (true)  {
		if (i === 76) i = 1;
		yield i;
		i++;
	}
}

function Board(props) {
	const dispatch = useDispatch();
	const thing = useSelector(state => state.board);

		return (
			<table id="board">
			<tbody>
			<tr id="B-row"><td id="B-box" className="letter">B</td>
				{thing.board.slice(0, 15).map( (element, index) => {
					if (element) {
						if (props.numBall === 75)
							return <td key={index} id="final-letter" className="selected">{index+1}</td> 
						else
							return <td key={index} className="selected">{index+1}</td> 
					}

					return <td>{index+1}</td>
				})}
			</tr>
			<tr id="I-row"><td id="I-box" className="letter">I</td>
				{thing.board.slice(15, 30).map( (element, index) => {
					if (element) return <td key={index} className="selected">{index+16}</td> 
					return <td>{index+16}</td>
				})}
			</tr>
			<tr id="N-row"><td id="N-box" className="letter">N</td>
				{thing.board.slice(30, 45).map( (element, index) => {
					if (element) return <td key={index} className="selected">{index+31}</td> 
					return <td>{index+31}</td>
				})}
			</tr>
			<tr id="G-row"><td id="G-box" className="letter">G</td>
				{thing.board.slice(45, 60).map( (element, index) => {
					if (element) return <td key={index} className="selected">{index+46}</td> 
					return <td>{index+46}</td>
				})}
			</tr>
			<tr id="O-row"><td id="O-box" className="letter">O</td>
				{thing.board.slice(60, 75).map( (element, index) => {
					if (element) return <td key={index} className="selected">{index+61}</td> 
					return <td>{index+61}</td>
				})}
			</tr>
			</tbody>
			</table>
		)
}

export default Board;
