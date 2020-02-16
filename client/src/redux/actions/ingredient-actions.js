import { axiosWithAuth } from '../../protected/axiosWithAuth';
import {
	FETCH_INGREDIENTS_START,
	FETCH_INGREDIENTS_SUCCESS,
	FETCH_INGREDIENTS_FAIL
} from './types';
import axios from 'axios';

export const getIngredients = () => dispatch => {
	dispatch({ type: FETCH_INGREDIENTS_START });

	axios.get('http://localhost:5000/api/ingredients')
		.then(res => {
			dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: res.data })
		})
		.catch(err => {
			dispatch({ type: FETCH_INGREDIENTS_FAIL, payload: err });
		})
}