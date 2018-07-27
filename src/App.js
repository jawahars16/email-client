import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import Main from './containers/Main';
import { Provider } from 'react-redux';
import './App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	/* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

const App = () => (
	<Provider store={store}>
		<Main />
	</Provider>
);

export default App;
