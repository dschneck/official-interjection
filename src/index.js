// React
import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './App.js';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';

const store = createStore(rootReducer);
let numCards = 4;

ReactDOM.render(
	<Provider store={store}>
		<App numCards={numCards}/>
	</Provider>
	, document.getElementById('root')
);
