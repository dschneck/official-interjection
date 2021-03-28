import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// need  to import the actions that board would take


function Board(props) {
	const dispatch = useDispatch();
	const board = useSelector(state => state.board);

		return (
			<table id="board">
			<tbody>
			<tr id="B-row"><td id="letter">B</td>
				{board.slice(0, 15).map( (element, index) => {
					console.log("board at index " + index+ ": " + element);
					if (element) return <td className="selected">{index+1}</td> 
					return <td>{index+1}</td>
				})}
			</tr>
			<tr id="I-row"><td id="letter">I</td>
				{board.slice(15, 30).map( (element, index) => {
					console.log("board at index " + index+ ": " + element);
					if (element) return <td className="selected">{index+16}</td> 
					return <td>{index+16}</td>
				})}
			</tr>
			<tr id="N-row"><td id="letter">N</td>
				{board.slice(30, 45).map( (element, index) => {
					console.log("board at index " + index+ ": " + element);
					if (element) return <td className="selected">{index+31}</td> 
					return <td>{index+31}</td>
				})}
			</tr>
			<tr id="G-row"><td id="letter">G</td>
				{board.slice(45, 60).map( (element, index) => {
					console.log("board at index " + index+ ": " + element);
					if (element) return <td className="selected">{index+46}</td> 
					return <td>{index+46}</td>
				})}
			</tr>
			<tr id="O-row"><td id="letter">G</td>
				{board.slice(60, 75).map( (element, index) => {
					console.log("board at index " + index+ ": " + element);
					if (element) return <td className="selected">{index+61}</td> 
					return <td>{index+61}</td>
				})}
			</tr>
			</tbody>
			</table>
		)
}

export default Board;
