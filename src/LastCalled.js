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
					 {queue.lastCalled.map( (element, index) => {
						if (index === 0) return <li key={`${index}:key` } id="selected-ball" className="ball">{element}</li>
						else return <li key={`${index}:last_called_key` } className="ball">{element}</li>
					})}
					
				</ul>
				<img src={image} alt="image should appear" width="100" height="100"></img>
			</div>
		)


}

export default LastCalled;
