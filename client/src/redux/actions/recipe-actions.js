import { axiosWithAuth } from '../../protected/axiosWithAuth';
import axios from 'axios';

import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAIL,
	FETCH_RECIPE_DETAILS_START,
	FETCH_RECIPE_DETAILS_SUCCESS,
	FETCH_RECIPE_DETAILS_FAIL,
	ADD_DATA_START,
} from './types';


// fetch recipes by user id
export const fetchUserRecipes = (id) => dispatch => {
	dispatch({ type: FETCH_DATA_START });

	axiosWithAuth().get(`http://localhost:5000/api/users/${id}/recipes`)
		.then(res => {
			// console.log(res.data);

			dispatch({
				type: FETCH_DATA_SUCCESS,
				payload: res.data
			});

		})
		.catch(error => {

			dispatch({
				type: FETCH_DATA_FAIL,
				payload: error
			});
		})
}

// Fetch recipe details by recipe id
export const fetchRecipeDetails = (id) => dispatch => {
	dispatch({ type: FETCH_RECIPE_DETAILS_START });

	axios.get(`http://localhost:5000/api/recipes/${id}`)
		.then(res => {
			console.log(res.data);

			dispatch({
				type: FETCH_RECIPE_DETAILS_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: FETCH_RECIPE_DETAILS_FAIL,
				payload: err
			})
		})
}

// Post a recipe
export const addRecipe = () => dispatch => {
	dispatch({ type: ADD_DATA_START });
}