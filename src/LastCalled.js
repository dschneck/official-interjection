import React from 'react';
import './styles/LastCalled.css';
import image from './images/lotto-ball.png'
import {enqueue, dequeue} from './actions/lastCalled/lastCalledSlice.js';
import  {useSelector, useDispatch} from 'react-redux';

function LastCalled(props) {
	const queue = useSelector(state => state.lastCalled);


		return (
			<div id="last-called">
				<ul>
					{queue.map( (element, index) => {
						if (element === null) return;
						return <li key={`${index}:key`}className="ball">{element}</li>
					})}
				</ul>
				<img src={image} alt="image should appear" width="128" height="128"></img>
			</div>
		)


}

export default LastCalled;
