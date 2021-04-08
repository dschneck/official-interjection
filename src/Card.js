import React from 'react';
import './styles/CardContainer.css';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.card_id = props.card_id;

	}

	spwn(x, indexBuffer) {
		let ret = [];
		for (let i = 0; i < x; i++){
			ret.push(<td key={i+indexBuffer}>{Math.floor((Math.random() * 75) +1)}</td>);
		}
		console.log("The array is at 1: " + ret[1]);
		return ret;
	}

	render() {
		return (
			<div className="card">
				<h1 className="cardTitle">Card</h1>
				<div className="cardNumbers">
				<table>
					<tbody>
					<tr>{this.spwn(5, 1*100)}</tr>
					<tr>{this.spwn(5, 5*100)}</tr>
					<tr>{this.spwn(5, 10*100)}</tr>
					<tr>{this.spwn(5, 15*100)}</tr>
					<tr>{this.spwn(5, 20*100)}</tr>
				</tbody>
				</table>
				</div>
				<div className="key">{this.card_id}</div>
			</div>
		);
	}
}

export default Card;
