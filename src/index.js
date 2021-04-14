// React
import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './App.js';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';

function* incNumBallsCalled() {
	let i = 1;

	while (true) {
		if (i === 76) i = 1;

		yield i;
		i++
	}
}

const store = createStore(rootReducer);
const inc = incNumBallsCalled();
let numCards = 3;

ReactDOM.render(
	<Provider store={store}>
		<App numCards={numCards} numBall={inc.next().value}/>
	</Provider>
	, document.getElementById('root')
);
