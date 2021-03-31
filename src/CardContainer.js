import React from 'react';
import Card from './Card.js';
import './styles/CardContainer.css';

class CardContainer extends React.Component {
	constructor(props) {
		super(props);
		this.numCards = props.numCards;
	}

	
	render() {
		const cards = new Array(this.numCards).fill(0);
		return (
			<div className="card-container">
			{cards.map(() => {
				return <Card />
			})}
			</div>
		);
	}
}

export default CardContainer;
