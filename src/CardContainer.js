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
			<div className="cardContainer">
			{cards.map(() => {
				return <Card card_id={2} />
			})}
			</div>
		);
	}
}

export default CardContainer;
