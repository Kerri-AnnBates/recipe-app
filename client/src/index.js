import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './redux/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import { loadData, saveData } from './localData/localData';
import userReducer from './redux/reducer/userReducer';

// Persist user data after log import 
// const persistedData = loadData();
const initialState = reducer.initialState
// const persistedData = initialState
const persistedData = {
	userReducer: {
		...userReducer,
		loggedInUser: {
			id: 1,
			name: 'test'
		}
	}
}



// Create store
const store = createStore(reducer, persistedData, applyMiddleware(thunk, logger));
console.log(store.getState())
// store.subscribe(() => {
// 	saveData({
// 		user: store.getState().loggedInUser
// 	});
// })

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
