import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAIL,
	FETCH_RECIPE_DETAILS_START,
	FETCH_RECIPE_DETAILS_SUCCESS,
	FETCH_RECIPE_DETAILS_FAIL,
} from '../actions/types';

const initialState = {
	isFetching: false,
	error: null,
	recipes: [],
	recipeDetails: null
}

function recipesReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_DATA_START:
			return {
				...state,
				isFetching: true,
				error: null
			}
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
				recipes: action.payload
			}
		case FETCH_DATA_FAIL:
			return {
				...state,
				isFetching: false,
				error: action.payload,
				recipes: []
			}
		case FETCH_RECIPE_DETAILS_START:
			return {
				...state,
				isFetching: true,
				error: null
			}
		case FETCH_RECIPE_DETAILS_SUCCESS:
			return {
				...state,
				isFetching: false,
				recipeDetails: action.payload,
				error: null
			}
		case FETCH_RECIPE_DETAILS_FAIL:
			return {
				...state,
				isFetching: false,
				recipeDetails: null,
				error: action.payload
			}
		default:
			return state;
	}
}

export default recipesReducer;