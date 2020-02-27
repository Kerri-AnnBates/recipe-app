import {
	FETCH_INGREDIENTS_START,
	FETCH_INGREDIENTS_SUCCESS,
	FETCH_INGREDIENTS_FAIL,
	ADD_INGREDIENT_TO_RECIPE_START,
	ADD_INGREDIENT_TO_RECIPE_SUCCESS,
	ADD_INGREDIENT_TO_RECIPE_FAIL,
	FETCH_ADDED_INGREDIENTS_START,
	FETCH_ADDED_INGREDIENTS_SUCCESS,
	FETCH_ADDED_INGREDIENTS_FAIL,
} from '../actions/types';

const initialState = {
	isFetching: false,
	error: null,
	ingredients: [],
	isAdding: false,
	added: null,
	addedIngredients: []
}

function ingredientsReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_INGREDIENTS_START:
			return {
				...state,
				isFetching: true,
				error: null
			}
		case FETCH_INGREDIENTS_SUCCESS:
			return {
				...state,
				isFetching: false,
				ingredients: action.payload,
				error: null
			}
		case FETCH_INGREDIENTS_FAIL:
			return {
				...state,
				ingredients: [],
				error: action.payload
			}
		case ADD_INGREDIENT_TO_RECIPE_START:
			return {
				...state,
				isAdding: true,
				added: null,
				error: null
			}
		case ADD_INGREDIENT_TO_RECIPE_SUCCESS:
			return {
				...state,
				isAdding: false,
				added: action.payload,
				error: null
			}
		case ADD_INGREDIENT_TO_RECIPE_FAIL:
			return {
				...state,
				added: null,
				error: action.payload
			}
		case FETCH_ADDED_INGREDIENTS_START:
			return {
				...state,
				error: null
			}
		case FETCH_ADDED_INGREDIENTS_SUCCESS:
			return {
				...state,
				addedIngredients: action.payload,
				error: null
			}
		case FETCH_ADDED_INGREDIENTS_FAIL:
			return {
				...state,
				addedIngredients: null,
				error: action.payload
			}

		default:
			return state;
	}
}

export default ingredientsReducer;